
var agentTimerId;
var reiTimerId;
var cancelTimerId = null;
//var escapeAct55 = 0;

/*
@n ans  vlu       subName  関数           content 席レコード                                    条件
@n -----------------------------------------------------------
@n 5501 9999:5501:agent3s  getSeatsAction -1:     無          by agent3s('5501'); in asker.php  u.sipuri = '5501'
@n - - - - - - - - -       - - - - - - - - - - - - - - - - - -
@n 5501 9999:5501:agent3s  getSeatsAction *:*     有(イス含)                〃                  u.sipuri = '5501'
@n - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
@n ""   <--- 引数なし -->  selectUseAns           有無        by 直接             in asker.php  er(1,3,4)
@n - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
@n ""   9999:    :asker3s  getSeatsAction -1:     無          by asker3s();       in asker.php  er(1,3,4)
@n - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
@n 1001 9999:1001:asker3s  getSeatsAction *:*     有(イス含)                〃                  er(1,3,4)
@n - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
@n
@n CORS) access-control-allow-origin ajax
@n https://qiita.com/shiho97797/items/76e61b67181b0930d02d
*/
function agent3s(ans) { // var fn = (function(ans) { })('<?php echo $ans; ?>'); ではダメ
//var ans = '<?php echo $ans; ?>';
//var ans = '5501';
  var anses = [];
var appname = '';
if(ans.endsWith(":")) {
  ans = ans.replace(/:/,'');
} else {
  appname = 'agent3s';
}
var numpush = getNumpush(ans);
  anses = ans.split(',');
  var iam = '9999'; elemIam = document.getElementById("iam"); // 代入値:'1XXX')numpush+up:押下(sts:1)
  if(elemIam != null) { iam = elemIam.textContent; }
  var vlu = iam + ':' + ans + ':' + appname;
  jQuery.ajax({
    type: 'post',
    url: 'http://localhost/sub6/' + 'calledbyjsns.php',
    data: {'func' : 'getSeatsAction', 'argument': vlu },
//  async: false,											// 3(s)更新∴
    success: function(content){ // 正常に処理が完了した時
var tst = [];
tst = content.split(':'); // content !== ''
suu = tst[0];             // tst[0]  !== '' ※if(suu == (-1)) { $myself(0) } else { $myself(1) }
var vew = [];
var answs = []; var dataes = {};
if(tst[1].length > 0) {
  var vex = tst[1].split(','); // tst[1] は '' 含む
  for(var i=0;i<vex.length;++i) {
    var wxw = vex[i].split('|');
    answs.push(wxw[2]); dataes[ wxw[2] ] = vex[i];
  }
  for(var i=0;i<1;++i) { // 旧)i<40
    if(answs.indexOf(anses[i]) < 0) {
      vew.push('-');
    } else {
      vew.push(dataes[ anses[i] ]);
} } }
      for(var i=0;i<1;++i) { // 旧)i<40
        target  = document.getElementById("agentsts");
        targetQ = document.getElementById("spekksts"); // 通知文言
if(target === null) { continue; }
        if(i < anses.length) { var call = '',spek = '';
  if(answs.indexOf(anses[i]) < 0) {
    if(target  == null) { ; } else {
    target .innerHTML = '<img src="' + 'http://localhost/sub6/' + 'images/riseki.png">'; }
    if(targetQ == null) { ; } else {
    targetQ.innerHTML = /*'<div class="tsuuchi">抹消</div>'*/''; }
  } else {
var wew = vew[i].split('|');	// wew) 0:getSTS 2:getAnswer 3:getAction 4:getTsuuchi 9:getYobi1 15:getKaiji[未使用] 16:getResponse
/*
if(((document.getElementById("mae").textContent == 2)||(document.getElementById("mae").textContent == 3))&&
                   (wew[2] == document.getElementById("who").textContent)&&((wew[3] == 4)||(wew[3] == 5))) { document.getElementById("iam").textContent = '9999'; }
                                                                                                             document.getElementById("mae").textContent = wew[3]; // 9(へ)戻す必要ない
*/
  if(wew[16].length > 0) { downloadFile2(wew[15],wew[16]); clearInterval(reiTimerId); clearInterval(agentTimerId); excIam(9999); setTimeout(agent3s,1000,ans);
/*  if(escapeAct55 > 0) { escapeAct55 = 0;
    } else {
location.href = 'siptelegram:crstop';
    }*/
  }
// 電話機
if(wew[0] == 0) {
  call = '<img src="' + 'http://localhost/sub6/' + 'images/riseki.png" title="' + wew[2] + '">';
} else if(wew[0] == 1) {
//doMySyslog("PATH2 " + agentStatus + " " + document.getElementById('iam').textContent);
//if(agentStatus > 0) { agentStatus = 0; clearInterval(agentTimerId); excIam(9999); }
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
var kintama = ''; // ""(((×)))                                                             var kintama = '';
var list = new Array('http://localhost/sub6/calledbyjsns.php');                             var foo = function(){
var foo = function(){                                                                         var ppp = '';
  var url = list.shift();                                                                     $.ajax({
  var ppp = '';           // ""(((×)))                                                         type: 'post',
  $.ajax({                                                                                      url: 'http://localhost/sub6/calledbyjsns.php',
    type: 'post',                                                                               data: {'func' : 'getAskerMustBe' },
    url: url,                                                                                   async: false
    data: {'func' : 'getAskerMustBe' },                                                       }).done(function(content) {
    async: false                          // 入れないと非同期∴入れて無理矢理'同期'させる       ppp = content;
  }).done(function(content) {                                                                 });
    ppp = content; // document.getElementById("mustuse").textContent = content;(((×)))       kintama = ppp;
    if(list.length) {                                                                       };
      foo();                                                                                foo();
    }
  });
  kintama = ppp; // 3秒後のasker3s();で使いたい訳ではない∴再帰にして内部変数'kintama'(へ)代入させた
};
foo();
call = '<div class="aglcallup"><a href="#" onclick="(function(){ excIam(' + kintama + '); location.href=\'bden:' + anses[i] + '+' + kintama + '\'; })();"><img src="images/' + numpush + '/numpush.png"></a></div>';
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
call = '<div class="aglcallup"><span tabindex="0" class="inn" style="--callup: url(images/' + numpush + '/callup.jpg); --callup2: url(images/' + numpush + '/callup2.jpg);" onclick="if(!amI9999()) { return false; } (function(){ var kintama = \'\'; var foo = function(){ var ppp = \'\'; $.ajax({ type: \'post\', url: \'http://localhost/sub6/' + 'calledbyjsns.php\', data: {\'func\' : \'getAskerMustBe\' }, async: false }).done(function(content) { ppp = content; }); kintama = ppp; }; foo(); excIam(kintama); startCallRegister(' + ans + '); location.href=`bden:numpush+' + ans + ':6:' + wew[9] + '+' + '${kintama}`; })(); window.agentTimerId = setInterval(agent3s,3000,\'' + ans + '\'); setTimeout(agent3s,0,\'' + ans + '\'); window.reiTimerId = setInterval(doReInvite,1000 * 90,\'' + ans + '\'); window.cancelTimerId = setTimeout(doInvite487,1000 * 30,\'' + ans + '\');"><img src="' + 'http://localhost/sub6/' + 'images/' + numpush + '/numpush.png"></span></div>';
/*
(function(){
 var kintama = \'\';
 var foo = function(){
 var ppp = \'\';
 $.ajax({ type: \'post\', url: \'http://' + location.host + (location.pathname).replace(/(\w+)\.(\w+)/,'') + 'calledbyjsns.php\', data: {\'func\' : \'getAskerMustBe\' }, async: false 
 }).done(function(content) { ppp = content; });
 kintama = ppp; };
 foo();
 excIam(kintama);
 location.href=`siptelegram:' + anses[i] + ':' + ers[ anses[i] ] + '+' + '${kintama}`;
})();*/
/*
  // 通話後の'9999'戻しは必須なのでとりあえずココで(ガンガン通過する∴↑へ)
  iam2 = document.getElementById("iam").textContent;
  if(iam2 != '9999'){
    var hhh = document.getElementById('ahoo' + i).textContent;
    var arg = hhh + ',' + iam2;
alert("i=" + i +" arg=" + arg);
    jQuery.ajax({
      type: 'post',
      url: 'http://localhost/sub6/calledbyjsns.php',
      data: {'func' : 'updMessageInUser', 'argument': arg },
      success: function(content){
      }
    });
  }*/
} else if(wew[0] == 2) {
  if(suu == (-1)) { call = '<div class="aglcallmissed"><img src="' + 'http://localhost/sub6/' + 'images/ring/ringing.gif"></div>'; }
  else            { call = '<div class="aglcallmissed"><span tabindex="0" class="inn" style="--missed: url(images/' + numpush + '/missed.jpg); --missed2: url(images/' + numpush + '/missed2.jpg);" onclick="stopCallRegister(' + ans + '); location.href=\'bden:crstop\'; clearTimeout(cancelTimerId); cancelTimerId = null;"><img src="' + 'http://localhost/sub6/' + 'images/ring/ringing.gif"></span></div>'; }
} else if(wew[0] == 3) { if(cancelTimerId != null) { clearTimeout(cancelTimerId); cancelTimerId = null; }
  if(suu == (-1)) { call = '<div class="aglcalldown"><img src="' + 'http://localhost/sub6/' + 'images/' + numpush + '/calling.png"></div>'; }
  else            { call = '<div class="aglcalldown"><span tabindex="0" class="inn" style="--calldown: url(images/' + numpush + '/calldown.jpg); --calldown2: url(images/' + numpush + '/calldown2.jpg);" onclick="stopCallRegister(' + ans + '); location.href=\'bden:crstop\'"><img src="' + 'http://localhost/sub6/' + 'images/' + numpush + '/calling.png"></span></div>'; }
} else if(wew[0] == 11) {
  call = '<img src="' + 'http://localhost/sub6/' + 'images/' + numpush + '/numpush.png">';
} else if(wew[0] == 12) {
  call = '<img src="' + 'http://localhost/sub6/' + 'images/ring/ringing.gif">';
} else if(wew[0] == 13) {
  call = '<img src="' + 'http://localhost/sub6/' + 'images/' + numpush + '/calling.png">';
}
if(target  !== null) {
          target .innerHTML = call;
}
if(wew[0] == 3) {
  spek = '通話中';
} else if(wew[0] == 1) {			// 待ち(numpush+up),呼出中ノ諦め∴受話器置(numpush+up),通話後(numpush+up),通話後…待ち(numpush+up)
  spek = ((wew[0] == 0) ? "15分超" : ((wew[4] == 0) ? "在席保証なし" : ((wew[4] == 1) ? "離席" : ((wew[4] == 2) ? "トイレ" : ((wew[4] == 3) ? "在席" : ((wew[4] == 4) ? "投票" : wew[4]))))));
} else {							// 呼出中ノ待ち(ringing)
  spek = ((wew[0] == 0) ? "15分超" : ((wew[4] == 0) ? "在席保証なし" : ((wew[4] == 1) ? "離席" : ((wew[4] == 2) ? "トイレ" : ((wew[4] == 3) ? "在席" : ((wew[4] == 4) ? "投票" : wew[4]))))));
}
          if(targetQ !== null) { targetQ.innerHTML = spek; }
  }
        } else {
          if(target  == null) { ; } else {
          target .innerHTML = '<img src="' + 'http://localhost/sub6/' + 'images/riseki.png">'; }
          if(targetQ == null) { ; } else {
          targetQ.innerHTML = ''; }
        }
      }
    }
  });
}

function excIam(sipuri) {
  document.getElementById("iam").textContent = sipuri;
}

function amI9999() {
  return (document.getElementById("iam").textContent < 9999) ? false : true;
}

function doMySyslog(mes) {
  var vlu = mes;
  jQuery.ajax({
    type: 'post',
    url: 'http://localhost/sub6/' + 'calledbyjs.php',
    data: {'func' : 'doMySyslog', 'argument': vlu },
    success: function(content){
    }
  });
}

function getNumpush(ans) {	// asyncを入れると[Object Promise]を返すかは不明
var kintama = '';
var foo = function(){
  var ppp = '';
  jQuery.ajax({
    type: 'post',
    url: 'http://localhost/sub6/' + 'calledbyjs.php',
    data: {'func' : 'getNumpush', 'argument': ans },
    async: false,
    success: function(content){
      ppp = content;
    }
  });
  kintama = ppp;
};
foo();
return kintama;
}

async function startCallRegister(ans) {	// 上の{startCallRegister(' + ans + '); location.href=`bden:' + ans + ':6:' ...}で、startCallRegister(ans)が終わってから bden: へ進みたいため
var localip = '192.168.1.3';	// LAN:押下者PCノIPアドレス / WAN:''
var contactip = '';
if(localip.length > 0) {
  contactip = localip;
} else {
  const res  = await fetch('https://api.ipify.org/?format=json');	// 押下者のWAN側IPアを取得するには api.ipify.org しかない
  const data = await res.json();
  contactip = data.ip;
}
  var vlu = ans + ',' + document.getElementById("iam").textContent + ',' + contactip;
  jQuery.ajax({
    type: 'post',
    url: 'http://localhost/sub6/' + 'calledbyjsns.php',
    data: {'func' : 'startCallRegister', 'argument': vlu },
    async: false,												// 入れた方がいいと思った(2025/12/08)bden:の方が先に実行されるかもと思った
    success: function(content){
    }
  });
}

function stopCallRegister(ans) {
  var vlu = ans + ',' + document.getElementById("iam").textContent;
  jQuery.ajax({
    type: 'post',
    url: 'http://localhost/sub6/' + 'calledbyjsns.php',
    data: {'func' : 'stopCallRegister', 'argument': vlu },
    success: function(content){
    }
  });
}

function doReInvite(ans) {
  var vlu = ans + ',' + document.getElementById("iam").textContent;
  jQuery.ajax({
    type: 'post',
    url: 'http://localhost/sub6/' + 'calledbyjsns.php',
    data: {'func' : 'doReInvite', 'argument': vlu },
    success: function(content){
    }
  });
}

function doInvite487(ans) {
  var vlu = ans + ',' + document.getElementById("iam").textContent;
  jQuery.ajax({
    type: 'post',
    url: 'http://localhost/sub6/' + 'calledbyjsns.php',
    data: {'func' : 'doInvite487', 'argument': vlu },
    success: function(content){
    }
  });
}

function downloadFile2(kaiji,content) {
//if(kaiji == 0) {
//var content="aaaa,bbbbb,ccccc";
  const imageName = Math.random().toString(32).substring(2);
  var blob = new Blob([ content.replace(/#/g,':').replace(/200 非開示は拒否.*$/,'200 XXXX').replace(/全て通す.*$/,'XXXX').replace(/プ情なし.*$/,'XXXX') ], { "type" : "text/csv"});
  var downLoadLink = document.createElement("a");
  downLoadLink.download = imageName + ".txt";
  downLoadLink.href =  window.URL.createObjectURL(blob);
  downLoadLink.dataset.downloadurl = ["text/plain", downLoadLink.download, downLoadLink.href].join(":");
  downLoadLink.click();
//}
}
