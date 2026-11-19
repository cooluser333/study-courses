/* Drawing helpers. Every diagram in this course is original SVG drawn here or inline in a lesson. */
(function(){
var n=0;
function uid(p){n++;return (p||"d")+n;}
var D={};
D.uid=uid;
/* Wrap inner SVG markup. vb = "0 0 W H". */
D.svg=function(vb,inner,title,cls,id){
  var t=uid("t"),h=uid("h");
  return '<svg class="diagram '+(cls||"")+'"'+(id?' id="'+id+'"':'')+' viewBox="'+vb+'" role="img" aria-labelledby="'+t+'" xmlns="http://www.w3.org/2000/svg">'+
  '<title id="'+t+'">'+(title||"diagram")+'</title>'+
  '<defs><pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="currentColor" stroke-width="1"/></pattern>'+
  '<marker id="ah" viewBox="0 0 10 10" refX="9.5" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 1.5L10 5L0 8.5z" fill="currentColor"/></marker>'+
  '<marker id="ahh" viewBox="0 0 10 10" refX="9.5" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 1.5L10 5L0 8.5z" style="fill:var(--hl)"/></marker>'+
  '<marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6"><circle cx="5" cy="5" r="4" fill="currentColor"/></marker></defs>'+
  inner+'</svg>';
};
D.fig=function(svg,cap){return '<figure>'+svg+(cap?'<figcaption>'+cap+'</figcaption>':'')+'</figure>';};
D.t=function(x,y,s,cls,anchor){return '<text x="'+x+'" y="'+y+'" class="'+(cls||"lbl")+'"'+(anchor?' text-anchor="'+anchor+'"':'')+'>'+s+'</text>';};
D.l=function(x1,y1,x2,y2,cls,extra){return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" class="'+(cls||"thin")+'" '+(extra||"")+'/>';};
/* Dimension: horizontal (o='h') or vertical (o='v') between two points with extension lines, text centered. */
D.dim=function(x1,y1,x2,y2,txt,o,off,cls){
  off=off||20;cls=cls||"sm";var s="";
  if(o==="v"){var x=x1+off;s+=D.l(x1+3*Math.sign(off),y1,x+4*Math.sign(off),y1)+D.l(x2+3*Math.sign(off),y2,x+4*Math.sign(off),y2);
    s+='<line x1="'+x+'" y1="'+y1+'" x2="'+x+'" y2="'+y2+'" class="thin" marker-start="url(#ah)" marker-end="url(#ah)"/>';
    var my=(y1+y2)/2;s+='<rect x="'+(x-16)+'" y="'+(my-8)+'" width="32" height="16" style="fill:var(--paper)"/>'+'<text x="'+x+'" y="'+(my+4)+'" class="'+cls+'" text-anchor="middle">'+txt+'</text>';}
  else{var y=y1+off;s+=D.l(x1,y1+3*Math.sign(off),x1,y+4*Math.sign(off))+D.l(x2,y2+3*Math.sign(off),x2,y+4*Math.sign(off));
    s+='<line x1="'+x1+'" y1="'+y+'" x2="'+x2+'" y2="'+y+'" class="thin" marker-start="url(#ah)" marker-end="url(#ah)"/>';
    var mx=(x1+x2)/2,w=Math.max(26,txt.length*7+6);s+='<rect x="'+(mx-w/2)+'" y="'+(y-8)+'" width="'+w+'" height="15" style="fill:var(--paper)"/><text x="'+mx+'" y="'+(y+4)+'" class="'+cls+'" text-anchor="middle">'+txt+'</text>';}
  return s;
};
/* ---------- AWS-style welding symbol builder ----------
 o = {x,y,len, arrow:'left'|'right', ax,ay (arrow tip), broken:bool,
      below:{type,size,len,root,angle,contour,finish}, above:{...},
      allAround, field, tail:"text", stagger:bool, cx}
 Below the reference line = ARROW SIDE. Above = OTHER SIDE. */
function shape(type,cx,y,s){
  var p="",f="";
  function P(d){p+='<path d="'+d+'" class="ws"/>';}
  switch(type){
    case "fillet":P("M"+(cx-10)+" "+y+" V"+(y+s*20)+" L"+(cx+10)+" "+y);break;
    case "square":P("M"+(cx-5)+" "+y+" v"+(s*18)+" M"+(cx+5)+" "+y+" v"+(s*18));break;
    case "V":P("M"+(cx-12)+" "+(y+s*18)+" L"+cx+" "+y+" L"+(cx+12)+" "+(y+s*18));break;
    case "bevel":P("M"+(cx-6)+" "+y+" V"+(y+s*18)+" M"+(cx-6)+" "+y+" L"+(cx+8)+" "+(y+s*18));break;
    case "U":P("M"+cx+" "+y+" V"+(y+s*8)+" M"+(cx-9)+" "+(y+s*18)+" Q"+(cx-9)+" "+(y+s*8)+" "+cx+" "+(y+s*8)+" Q"+(cx+9)+" "+(y+s*8)+" "+(cx+9)+" "+(y+s*18));break;
    case "J":P("M"+(cx-6)+" "+y+" V"+(y+s*18)+" M"+(cx-6)+" "+(y+s*8)+" Q"+(cx+5)+" "+(y+s*8)+" "+(cx+5)+" "+(y+s*18));break;
    case "flareV":P("M"+(cx-12)+" "+y+" Q"+(cx-1)+" "+(y+s*9)+" "+(cx-12)+" "+(y+s*18)+" M"+(cx+12)+" "+y+" Q"+(cx+1)+" "+(y+s*9)+" "+(cx+12)+" "+(y+s*18));break;
    case "flareBevel":P("M"+(cx-8)+" "+y+" V"+(y+s*18)+" M"+(cx+10)+" "+y+" Q"+(cx-1)+" "+(y+s*9)+" "+(cx+10)+" "+(y+s*18));break;
    case "backing":P("M"+(cx-9)+" "+y+" A9 9 0 0 "+(s>0?0:1)+" "+(cx+9)+" "+y);break;
    case "melt":f+='<path d="M'+(cx-9)+" "+y+" A9 9 0 0 "+(s>0?0:1)+" "+(cx+9)+" "+y+'Z" class="wsf"/>';break;
    case "plug":P("M"+(cx-11)+" "+y+" v"+(s*10)+" h22 v"+(-s*10));break;
    case "spot":P("M"+(cx-8)+" "+(y+s*8)+" a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0");break;
  }
  return p+f;
}
function contour(type,kind,cx,y,s){
  if(!kind)return "";
  if(type==="fillet"){
    if(kind==="flat")return '<path d="M'+(cx-4)+" "+(y+s*21)+" L"+(cx+11)+" "+(y+s*6)+'" class="ws"/>';
    if(kind==="convex")return '<path d="M'+(cx-4)+" "+(y+s*21)+" Q"+(cx+9)+" "+(y+s*19)+" "+(cx+11)+" "+(y+s*6)+'" class="ws"/>';
    if(kind==="concave")return '<path d="M'+(cx-4)+" "+(y+s*21)+" Q"+(cx+1)+" "+(y+s*10)+" "+(cx+11)+" "+(y+s*6)+'" class="ws"/>';
  }
  var yy=y+s*24;
  if(kind==="flat")return '<path d="M'+(cx-11)+" "+yy+" H"+(cx+11)+'" class="ws"/>';
  if(kind==="convex")return '<path d="M'+(cx-11)+" "+yy+" Q"+cx+" "+(yy+s*8)+" "+(cx+11)+" "+yy+'" class="ws"/>';
  if(kind==="concave")return '<path d="M'+(cx-11)+" "+(yy+s*5)+" Q"+cx+" "+(yy-s*3)+" "+(cx+11)+" "+(yy+s*5)+'" class="ws"/>';
  return "";
}
function side(sd,cx,y,s){
  if(!sd||!sd.type||sd.type==="none")return "";
  var g=shape(sd.type,cx,y,s);
  var ty=s>0?y+16:y-6;
  if(sd.size)g+='<text x="'+(cx-15)+'" y="'+ty+'" class="sm" text-anchor="end">'+sd.size+'</text>';
  if(sd.len)g+='<text x="'+(cx+(sd.type==="fillet"?14:16))+'" y="'+ty+'" class="sm">'+sd.len+'</text>';
  if(sd.root)g+='<text x="'+cx+'" y="'+(s>0?y+15:y-5)+'" class="xs" text-anchor="middle">'+sd.root+'</text>';
  if(sd.angle)g+='<text x="'+cx+'" y="'+(s>0?y+31:y-22)+'" class="xs" text-anchor="middle">'+sd.angle+'</text>';
  g+=contour(sd.type,sd.contour,cx,y,s);
  if(sd.finish){var fx=sd.type==="fillet"?cx+16:cx,fy=sd.type==="fillet"?(s>0?y+29:y-21):(s>0?y+42:y-32);g+='<text x="'+fx+'" y="'+fy+'" class="sm b" text-anchor="middle">'+sd.finish+'</text>';}
  return g;
}
D.ws=function(o){
  var x=o.x||110,y=o.y||80,len=o.len||190,xa=x,xb=x+len,right=o.arrow==="right";
  var J=right?xb:xa,T=right?xa:xb,dir=right?1:-1;
  var ax=o.ax!==undefined?o.ax:J+dir*55,ay=o.ay!==undefined?o.ay:y+(o.arrowUp?-55:55);
  var g='<g class="wsym">';
  g+='<line x1="'+xa+'" y1="'+y+'" x2="'+xb+'" y2="'+y+'" class="ws"/>';
  if(o.broken){var mx=(J+ax)/2,my=(y+ay)/2;g+='<path d="M'+J+" "+y+" L"+mx+" "+my+" L"+(mx+dir*14)+" "+my+" L"+ax+" "+ay+'" class="ws" marker-end="url(#ah)"/>';}
  else g+='<line x1="'+J+'" y1="'+y+'" x2="'+ax+'" y2="'+ay+'" class="ws" marker-end="url(#ah)"/>';
  var cx=o.cx||(xa+xb)/2;
  g+=side(o.below,cx,y,1);
  g+=side(o.above,cx+(o.stagger?22:0),y,-1);
  if(o.allAround)g+='<circle cx="'+J+'" cy="'+y+'" r="7" class="ws"/>';
  if(o.field){var fy=o.allAround?y-7:y;g+='<line x1="'+J+'" y1="'+fy+'" x2="'+J+'" y2="'+(y-34)+'" class="ws"/><path d="M'+J+" "+(y-34)+" L"+(J-dir*18)+" "+(y-28)+" L"+J+" "+(y-22)+'Z" class="wsf"/>';}
  if(o.tail!==undefined&&o.tail!==null){var td=-dir;g+='<path d="M'+(T+td*14)+" "+(y-12)+" L"+T+" "+y+" L"+(T+td*14)+" "+(y+12)+'" class="ws"/>';
    if(o.tail)g+='<text x="'+(T+td*18)+'" y="'+(y+4)+'" class="sm"'+(td<0?' text-anchor="end"':'')+'>'+o.tail+'</text>';}
  return g+'</g>';
};
/* Quick standalone weld symbol SVG */
D.wsSvg=function(o,w,h,title,extra){w=w||360;h=h||160;return D.svg("0 0 "+w+" "+h,D.ws(o)+(extra||""),title||"welding symbol");};
/* Fractions */
function gcd(a,b){return b?gcd(b,a%b):a;}
D.frac16=function(n){ /* n = sixteenths */
  var whole=Math.floor(n/16),r=n%16;if(!r)return whole+'"';var g=gcd(r,16);return (whole?whole+"-":"")+(r/g)+"/"+(16/g)+'"';};
window.D=D;
})();
