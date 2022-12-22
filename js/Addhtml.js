// page頁面 上方
function PageHeader() {
  document.writeln("<div class='position-fixed fixed-top'>");
  document.writeln("    <!-- login ------------------------------------>");
  document.writeln(
    "    <div class='container-fluid  d-none d-md-block p-0 bg-gradient-theme uk-position-relative'>"
  );
  document.writeln("      <div class='container-lg'>");
  document.writeln("        <div class='row align-items-center'>");
  document.writeln(
    "          <a href='../index.html' class='col-2 px-0 text-center'>"
  );
  document.writeln(
    "            <img src='../img/桌機index_img/logo.png' class='img-fluid px-2' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln(
    "          <div class='col-7 px-0 d-inline-flex align-items-center'>"
  );
  document.writeln("            <div class='btn-group'>");
  document.writeln("              <div class='btn py-0 px-1 px-lg-2 my-auto'>");
  document.writeln("                <p class='font_b line_ss m-0'>");
  document.writeln("                  首頁");
  document.writeln("                </p>");
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList '>"
  );
  document.writeln("                <!-- 使用藍底線 -->");
  document.writeln("                <!-- <p class='line_ss'>");
  document.writeln("                    真人");
  document.writeln(
    "                    <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("                  </p> -->");
  document.writeln("                <span>真人</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>體育</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>賓果</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>電子</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>棋牌</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>捕魚</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <a href='../page/Promotion.html' class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>優惠</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </a>");
  document.writeln("            </div>");
  document.writeln("          </div>");
  document.writeln("          <div class='col-3 centerCenter' id='drw'>");
  document.writeln(
    "            <div class='row align-items-center btn-group'>"
  );
  document.writeln("");
  document.writeln(
    "              <div class='col-7 p-0 pl-1 dropdown-toggle'>"
  );
  document.writeln(
    "                <a href='../page/indexLoginPage.html' class='pr-2'><input"
  );
  document.writeln(
    "                    class='btn rounded py-1 input-size font-weight-bold text-light'"
  );
  document.writeln(
    "                    style='background: linear-gradient(180deg, #57D7FF 0%, #1E50A6 100%);' type='submit' value='登入'></a>"
  );
  document.writeln(
    "                <a href='../header page/Signup.html' target='_black'><input class='btn py-1 input-size font-weight-bold'"
  );
  document.writeln(
    "                    style='background: linear-gradient(180deg, #F8E98E 0%, #F2D06F 100%);' type='button' value='註冊'></a>"
  );
  document.writeln("              </div>");
  document.writeln("            </div>");
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("");
  document.writeln("      <!-- hoveList -->");
  document.writeln(
    "      <div class='p-0' style='background-color: rgba(255, 255, 255, 0.5);'>"
  );
  document.writeln("        <div class='container-lg'>");
  document.writeln(
    "          <!--  <div class='row px-5 py-3 hoverListIItem uk-position-fixed uk-position-top-center bg-light'"
  );
  document.writeln(
    "                          style='top: 65px;z-index: 999999999999999999999;'> -->"
  );
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10035.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10036.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10037.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10038.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10039.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10040.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/sport/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/sport/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/bingo/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/bingo/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 py-3 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/3.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/4.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/5.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/6.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/card/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/card/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/fish/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/fish/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("");
  document.writeln("    <!--  uk-position-relative -->");
  document.writeln(
    "    <div class='container-fluid p-0 m-0 bgc-body-color d-none d-md-block marquee_bg border'>"
  );
  document.writeln("      <div class='container bgc-flex'>");
  document.writeln("        <div class='row p-0 m-0'>");
  document.writeln(
    "          <div class='text-center' style='padding-top: 0.1em;width: 12%;'>"
  );
  document.writeln("            <img");
  document.writeln(
    "              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAaCAYAAADSbo4CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXISURBVHgBrVZLbxtVFD53Hp44cRK7ScUzrd1EgqKqScSCgoQykWCdLtmRLhAqmzhCFMqmiUAUAW3SFSsU9xe0bGDBoqkQtEiV7ETpA7Wp3VSN82jwOHFsj2fuvZx7bcdjuw+acpSJx3fOPfc73/nOGQP8D8aTU8FC+nQYnsMUeE7Lzn02ZrfyJCG+ZH7tzBTs0gjs0jKXRsNq9wszvu695sr1O5BZWoYD774JvoD/mP+lEzF4RtsVI5s3Th71RfrieleX+fD2PVj6ax620g/h1i+/g1ssjT1tvyhjae3s2K6BxGfM4PbixIze0XlB0bUgcA4P4jd3ntu5PKzeuDtQSH839ORI2ihjbLqQ/t58ZiDrv42arw0NxxXDGBUAgHFkYV0e7rWNO0vAXDosga2cHbEf/HC0MRYnPMNFDA6n/jMQwUJ2/sRUa2/kEmh6mDOGOJgIh7pIN/kLYCUrJxlhnA5yFWZEV3l9iEPnQMTgzNy6f9p8KpC1Pz4a6D3ydlzv7IgqmiZCg2QDL5HR1urGI/dtrq0PyMw5WAg8WGxx6/Tg7zk5iyhnhYNKyIhY0/IrZ6IE+AgRmAQsxsr48I9uWibRdIFcnl/fZBzy/2w+EkjR2g7y5a/3W7YWM3ylUwrjUVye9PpQxs+rBEyicAFkXCHUHcDDTeB0CCgdwgxMzlyTu+4OCMkA45X7cmlKDdrwmr2dh22bhEKRcQsoj6F/cOv+V6bXx6H2RVliBmEBWhEncEpBXMx1CTCKcPHCT14HolyO6r29VXg8kFwBtzthySF1fhZxVEYGvD6hyIRFsDyYONmy+aAmDxVEE+RdCrlSAVwQZeLllfIDDrV7oZeK+QKtcphpPg22sVyrC7dFZaVAi0ATBhchSX8jYMr5nMK5ieoLa4xS0jhfSfV/RZj1xuUzkXXVXn//CBjtrZIxf2cb+Fr0usy3k5Mp3DUATeamOFfEvrDGsQSEQC1b/MIrh3PGPA8agFZ8jDY/6IYKzCmV9+B6oKsDFFlDqK5ZhEOwMQ5zmKVqBFQFOmVpOKkd4D2WOw6Itm3mhO+UzC054BYKoOpaLc+SC5qh1Xim1AKFNAEpo2HAiOhZ5nJUFsd+gqpoy2JlYM0vQH45XSuRnKhlARutLeUzHBeWF+4i6BJeNoLKw9K1W03QcZ/VjELok4kOAKkRYZIRIhMlVQZosQibt/4Gx7KgLbwPFKOlXEbcq2rqTrj1xWXIpjfA5/dBYbMArcEAJqSkPCcOYHkSjTAIV3BSy67Iaoh0R47VziHEkwlaYWUVx7YFgd4DYHR1yRqqWv1QLuVteQlTdRXb1pYMZG5+EUaGg5jhXCMQRYF+ISAEk8Jo7kVO2STh7oS250XLt/dlrnW/hBVjk1im1A6JRRuy129CbvGuLI+O2Xt14TXsHJSXI/fqFExBPZIeb3J05TAVWBJ1jZtf+iaJH2FRIn/Pl0pyygzSltIEOtW9K9QWA0KHD8HitTuQe5htih9566DV895PIXGfu3EiiZSHXUWJhA5+m6r65BY+7wcVEoJzt2iH6vmlDnDXwbZyJMDI+KzVd/zPKKr5GH5NednJzF+H9u5OeJT5/Mbl8mGffogjIIyMJLwgpBGIijFNOJsNDU5bdUAYql6q3y3V7ek7fjWG7TWMFJ6vgSmCP2A0gQh0d0DbnsAF6UN5RL6bGDvn9cnEo2E8bVTOK8JiYq0BiCsZEVejRY5fTfV9cmUUJ9U4algKUXMLcnh5ratnLzjF0uVKRAEi1XH4bMzro2vqCBPvNATpgH65CQhQNwG0NIsTaRYeY70fX5lWCBtEHSXsjQy8cmg/dlBZtP7OVtjzaregOiVhMIjpumM2xsCfACFSfpmfr5Zs17/ihd3+8Z2J9sj+U1owBNmVDHTt6+ZGiy/if+PMvSfty82NjyFXUZyhw1XQzwVEWPrXD8JGe+CC1h4IKkCmA/1T5562BzUixn2wCkLYvyRqQEF/Alk1AAAAAElFTkSuQmCC'"
  );
  document.writeln("              alt='...'>");
  document.writeln(
    "            <span class='font-weight-bold pl-1'>最新公告</span>"
  );
  document.writeln("          </div>");
  document.writeln("          <div class='' style='width: 80%;'>");
  document.writeln(
    "            <marquee direction='left' height='30' scrollamount='10' behavior='left' class=' h-100 pt-1'"
  );
  document.writeln(
    "              onmouseover='this.stop()' onmouseout='this.start()'>"
  );
  document.writeln(
    "              【維護公告0】 親愛的娛樂城會員您好，【幸運棋牌-維護通知】即刻起進行線路調整緊急維護，維護完成時間待定，造成不便敬請見諒    【存款公告】"
  );
  document.writeln(
    "              開通超商存款後以第一次繳費地點為綁定超商，若後續要更換繳費超商，請先提前告知與客服申請，否則導致造成資金損失風險需自行承擔，若為附近的超商地點繳費提前告知即可    【存款公告】"
  );
  document.writeln(
    "              敬愛的卡利會員您好，卡利娛樂城為防堵詐騙氾濫、保障會員資金安全，在此提醒：信用卡、ATM轉帳、VIP專用帳戶存款等服務，務必使用「本人帳戶」！若使用非本人帳戶存款，將一律扣除處理費用後退還本金，感謝您的配合。    【維護公告】"
  );
  document.writeln(
    "              親愛的會員您好，AV影城將於2020/12/14正式下架，造成不便敬請見諒。    【取款公告】"
  );
  document.writeln(
    "              親愛的卡利會員您好，由於體育注單會因改判賽事等因素，而進行注單重新結算，因此即日起，卡利娛樂城進行出款時，體育相關注單須全數派彩完畢才處理支付款項，若玩家手上有未派彩注單，麻煩您耐心等候，如有相關疑問、歡迎諮詢24H線上客服，謝謝您。"
  );
  document.writeln("            </marquee>");
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("");
  document.writeln("  </div>");
  document.writeln(
    "  <div class='row m-0 p-0 d-none d-md-block' style='min-height: 109px;'></div>"
  );
  document.writeln("");
  document.writeln(
    "<div class='uk-position-fixed uk-position-center-right btn-fixed d-none d-md-block'"
  );
  document.writeln(
    "    style='width: 5rem; height: auto;margin-top: -50px;z-index: 99999999999;'>"
  );
  document.writeln(
    "    <button type='button' class='uk-button bg-transparent  centerCenter px-0 py-1' data-toggle='modal'"
  );
  document.writeln("      data-target='#exampleModalCenter2'>");
  document.writeln(
    "      <img src='../img/桌機index_img/0service.png' class='img-fluid' alt=''>"
  );
  document.writeln("    </button>");
  document.writeln(
    "    <a href='../page/HelpCenter.html' class='uk-button bg-transparent  centerCenter px-0 py-1'>"
  );
  document.writeln(
    "      <img src='../img/桌機index_img/2help.png' class='img-fluid' alt=''>"
  );
  document.writeln("    </a>");
  document.writeln(
    "    <a href='../header page/3FAQ.html' class='uk-button bg-transparent  centerCenter px-0 py-1'>"
  );
  document.writeln(
    "      <img src='../img/桌機index_img/1announcement.png' class='img-fluid' alt=''>"
  );
  document.writeln("    </a>");
  document.writeln("  </div>");
}

function PageHeader2() {
  document.writeln("<div class=''>");
  document.writeln("    <!-- login ------------------------------------>");
  document.writeln(
    "    <div class='container-fluid  d-none d-md-block p-0 bg-gradient-theme uk-position-relative'>"
  );
  document.writeln("      <div class='container-lg'>");
  document.writeln("        <div class='row align-items-center'>");
  document.writeln(
    "          <a href='../index.html' class='col-2 px-0 text-center'>"
  );
  document.writeln(
    "            <img src='../img/桌機index_img/logo.png' class='img-fluid px-2' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln(
    "          <div class='col-7 px-0 d-inline-flex align-items-center'>"
  );
  document.writeln("            <div class='btn-group'>");
  document.writeln("              <div class='btn py-0 px-1 px-lg-2 my-auto'>");
  document.writeln("                <p class='font_b line_ss m-0'>");
  document.writeln("                  首頁");
  document.writeln("                </p>");
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList '>"
  );
  document.writeln("                <!-- 使用藍底線 -->");
  document.writeln("                <!-- <p class='line_ss'>");
  document.writeln("                    真人");
  document.writeln(
    "                    <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("                  </p> -->");
  document.writeln("                <span>真人</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>體育</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>賓果</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>電子</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>棋牌</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>捕魚</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <a href='../page/Promotion.html' class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>優惠</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </a>");
  document.writeln("            </div>");
  document.writeln("          </div>");
  document.writeln("          <div class='col-3 centerCenter' id='drw'>");
  document.writeln(
    "            <div class='row align-items-center btn-group'>"
  );
  document.writeln("");
  document.writeln(
    "              <div class='col-7 p-0 pl-1 dropdown-toggle'>"
  );
  document.writeln(
    "                <a href='../page/indexLoginPage.html' class='pr-2'><input"
  );
  document.writeln(
    "                    class='btn rounded py-1 input-size font-weight-bold text-light'"
  );
  document.writeln(
    "                    style='background: linear-gradient(180deg, #57D7FF 0%, #1E50A6 100%);' type='submit' value='登入'></a>"
  );
  document.writeln(
    "                <a href='../header page/Signup.html' target='_black'><input class='btn py-1 input-size font-weight-bold'"
  );
  document.writeln(
    "                    style='background: linear-gradient(180deg, #F8E98E 0%, #F2D06F 100%);' type='button' value='註冊'></a>"
  );
  document.writeln("              </div>");
  document.writeln("            </div>");
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("");
  document.writeln("      <!-- hoveList -->");
  document.writeln(
    "      <div class='p-0' style='background-color: rgba(255, 255, 255, 0.5);'>"
  );
  document.writeln("        <div class='container-lg'>");
  document.writeln(
    "          <!--  <div class='row px-5 py-3 hoverListIItem uk-position-fixed uk-position-top-center bg-light'"
  );
  document.writeln(
    "                          style='top: 65px;z-index: 999999999999999999999;'> -->"
  );
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10035.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10036.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10037.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10038.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10039.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10040.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/sport/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/sport/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/bingo/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/bingo/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 py-3 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/3.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/4.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/5.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/6.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/card/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/card/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/fish/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/fish/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("");
  document.writeln("    <!--  uk-position-relative -->");
  document.writeln(
    "    <div class='container-fluid p-0 m-0 bgc-body-color d-none d-md-block marquee_bg border'>"
  );
  document.writeln("      <div class='container bgc-flex'>");
  document.writeln("        <div class='row p-0 m-0'>");
  document.writeln(
    "          <div class='text-center' style='padding-top: 0.1em;width: 12%;'>"
  );
  document.writeln("            <img");
  document.writeln(
    "              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAaCAYAAADSbo4CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXISURBVHgBrVZLbxtVFD53Hp44cRK7ScUzrd1EgqKqScSCgoQykWCdLtmRLhAqmzhCFMqmiUAUAW3SFSsU9xe0bGDBoqkQtEiV7ETpA7Wp3VSN82jwOHFsj2fuvZx7bcdjuw+acpSJx3fOPfc73/nOGQP8D8aTU8FC+nQYnsMUeE7Lzn02ZrfyJCG+ZH7tzBTs0gjs0jKXRsNq9wszvu695sr1O5BZWoYD774JvoD/mP+lEzF4RtsVI5s3Th71RfrieleX+fD2PVj6ax620g/h1i+/g1ssjT1tvyhjae3s2K6BxGfM4PbixIze0XlB0bUgcA4P4jd3ntu5PKzeuDtQSH839ORI2ihjbLqQ/t58ZiDrv42arw0NxxXDGBUAgHFkYV0e7rWNO0vAXDosga2cHbEf/HC0MRYnPMNFDA6n/jMQwUJ2/sRUa2/kEmh6mDOGOJgIh7pIN/kLYCUrJxlhnA5yFWZEV3l9iEPnQMTgzNy6f9p8KpC1Pz4a6D3ydlzv7IgqmiZCg2QDL5HR1urGI/dtrq0PyMw5WAg8WGxx6/Tg7zk5iyhnhYNKyIhY0/IrZ6IE+AgRmAQsxsr48I9uWibRdIFcnl/fZBzy/2w+EkjR2g7y5a/3W7YWM3ylUwrjUVye9PpQxs+rBEyicAFkXCHUHcDDTeB0CCgdwgxMzlyTu+4OCMkA45X7cmlKDdrwmr2dh22bhEKRcQsoj6F/cOv+V6bXx6H2RVliBmEBWhEncEpBXMx1CTCKcPHCT14HolyO6r29VXg8kFwBtzthySF1fhZxVEYGvD6hyIRFsDyYONmy+aAmDxVEE+RdCrlSAVwQZeLllfIDDrV7oZeK+QKtcphpPg22sVyrC7dFZaVAi0ATBhchSX8jYMr5nMK5ieoLa4xS0jhfSfV/RZj1xuUzkXXVXn//CBjtrZIxf2cb+Fr0usy3k5Mp3DUATeamOFfEvrDGsQSEQC1b/MIrh3PGPA8agFZ8jDY/6IYKzCmV9+B6oKsDFFlDqK5ZhEOwMQ5zmKVqBFQFOmVpOKkd4D2WOw6Itm3mhO+UzC054BYKoOpaLc+SC5qh1Xim1AKFNAEpo2HAiOhZ5nJUFsd+gqpoy2JlYM0vQH45XSuRnKhlARutLeUzHBeWF+4i6BJeNoLKw9K1W03QcZ/VjELok4kOAKkRYZIRIhMlVQZosQibt/4Gx7KgLbwPFKOlXEbcq2rqTrj1xWXIpjfA5/dBYbMArcEAJqSkPCcOYHkSjTAIV3BSy67Iaoh0R47VziHEkwlaYWUVx7YFgd4DYHR1yRqqWv1QLuVteQlTdRXb1pYMZG5+EUaGg5jhXCMQRYF+ISAEk8Jo7kVO2STh7oS250XLt/dlrnW/hBVjk1im1A6JRRuy129CbvGuLI+O2Xt14TXsHJSXI/fqFExBPZIeb3J05TAVWBJ1jZtf+iaJH2FRIn/Pl0pyygzSltIEOtW9K9QWA0KHD8HitTuQe5htih9566DV895PIXGfu3EiiZSHXUWJhA5+m6r65BY+7wcVEoJzt2iH6vmlDnDXwbZyJMDI+KzVd/zPKKr5GH5NednJzF+H9u5OeJT5/Mbl8mGffogjIIyMJLwgpBGIijFNOJsNDU5bdUAYql6q3y3V7ek7fjWG7TWMFJ6vgSmCP2A0gQh0d0DbnsAF6UN5RL6bGDvn9cnEo2E8bVTOK8JiYq0BiCsZEVejRY5fTfV9cmUUJ9U4algKUXMLcnh5ratnLzjF0uVKRAEi1XH4bMzro2vqCBPvNATpgH65CQhQNwG0NIsTaRYeY70fX5lWCBtEHSXsjQy8cmg/dlBZtP7OVtjzaregOiVhMIjpumM2xsCfACFSfpmfr5Zs17/ihd3+8Z2J9sj+U1owBNmVDHTt6+ZGiy/if+PMvSfty82NjyFXUZyhw1XQzwVEWPrXD8JGe+CC1h4IKkCmA/1T5562BzUixn2wCkLYvyRqQEF/Alk1AAAAAElFTkSuQmCC'"
  );
  document.writeln("              alt='...'>");
  document.writeln(
    "            <span class='font-weight-bold pl-1'>最新公告</span>"
  );
  document.writeln("          </div>");
  document.writeln("          <div class='' style='width: 80%;'>");
  document.writeln(
    "            <marquee direction='left' height='30' scrollamount='10' behavior='left' class=' h-100 pt-1'"
  );
  document.writeln(
    "              onmouseover='this.stop()' onmouseout='this.start()'>"
  );
  document.writeln(
    "              【維護公告0】 親愛的娛樂城會員您好，【幸運棋牌-維護通知】即刻起進行線路調整緊急維護，維護完成時間待定，造成不便敬請見諒    【存款公告】"
  );
  document.writeln(
    "              開通超商存款後以第一次繳費地點為綁定超商，若後續要更換繳費超商，請先提前告知與客服申請，否則導致造成資金損失風險需自行承擔，若為附近的超商地點繳費提前告知即可    【存款公告】"
  );
  document.writeln(
    "              敬愛的卡利會員您好，卡利娛樂城為防堵詐騙氾濫、保障會員資金安全，在此提醒：信用卡、ATM轉帳、VIP專用帳戶存款等服務，務必使用「本人帳戶」！若使用非本人帳戶存款，將一律扣除處理費用後退還本金，感謝您的配合。    【維護公告】"
  );
  document.writeln(
    "              親愛的會員您好，AV影城將於2020/12/14正式下架，造成不便敬請見諒。    【取款公告】"
  );
  document.writeln(
    "              親愛的卡利會員您好，由於體育注單會因改判賽事等因素，而進行注單重新結算，因此即日起，卡利娛樂城進行出款時，體育相關注單須全數派彩完畢才處理支付款項，若玩家手上有未派彩注單，麻煩您耐心等候，如有相關疑問、歡迎諮詢24H線上客服，謝謝您。"
  );
  document.writeln("            </marquee>");
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("");
  document.writeln("  </div>");
  document.writeln("");
  document.writeln(
    "<div class='uk-position-fixed uk-position-center-right btn-fixed d-none d-md-block'"
  );
  document.writeln(
    "    style='width: 5rem; height: auto;margin-top: -50px;z-index: 99999999999;'>"
  );
  document.writeln(
    "    <button type='button' class='uk-button bg-transparent  centerCenter px-0 py-1' data-toggle='modal'"
  );
  document.writeln("      data-target='#exampleModalCenter2'>");
  document.writeln(
    "      <img src='../img/桌機index_img/0service.png' class='img-fluid' alt=''>"
  );
  document.writeln("    </button>");
  document.writeln(
    "    <a href='../page/HelpCenter.html' class='uk-button bg-transparent  centerCenter px-0 py-1'>"
  );
  document.writeln(
    "      <img src='../img/桌機index_img/2help.png' class='img-fluid' alt=''>"
  );
  document.writeln("    </a>");
  document.writeln(
    "    <a href='../header page/3FAQ.html' class='uk-button bg-transparent  centerCenter px-0 py-1'>"
  );
  document.writeln(
    "      <img src='../img/桌機index_img/1announcement.png' class='img-fluid' alt=''>"
  );
  document.writeln("    </a>");
  document.writeln("  </div>");
}

// Banner 上方
function PageHeaderBanner() {
  document.writeln(
    "<div class='container-fluid d-none d-md-block p-0 CardBg_BG'>"
  );
  document.writeln(
    "    <div id='carouselExampleIndicators' class='carousel slide' data-ride='carousel'>"
  );
  document.writeln("      <ol class='carousel-indicators'>");
  document.writeln(
    "        <li data-target='#carouselExampleIndicators' data-slide-to='0' class='active'></li>"
  );
  document.writeln(
    "        <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>"
  );
  document.writeln(
    "        <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>"
  );
  document.writeln("      </ol>");
  document.writeln("      <div class='carousel-inner'>");
  document.writeln("        <a href='#' class='carousel-item active'>");
  document.writeln(
    "          <img src='../img/桌機index_img/banner1.png' class='d-block w-100' alt='...'>"
  );
  document.writeln("        </a>");
  document.writeln("        <a href='#' class='carousel-item'>");
  document.writeln(
    "          <img src='../img/桌機index_img/banner2.png' class='d-block w-100' alt='...'>"
  );
  document.writeln("        </a>");
  document.writeln("      </div>");
  document.writeln(
    "      <a class='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>"
  );
  document.writeln(
    "        <span class='carousel-control-prev-icon' aria-hidden='true'></span>"
  );
  document.writeln("        <span class='sr-only'>Previous</span>");
  document.writeln("      </a>");
  document.writeln(
    "      <a class='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>"
  );
  document.writeln(
    "        <span class='carousel-control-next-icon' aria-hidden='true'></span>"
  );
  document.writeln("        <span class='sr-only'>Next</span>");
  document.writeln("      </a>");
  document.writeln("    </div>");
  document.writeln("  </div>");
}

// PC Footer
function PCFooter() {
  document.writeln(
    "<div class='container-fluid p-0 m-0 d-none d-md-block' style='background-color: #3D445E;'>"
  );
  document.writeln("    <div class='container px-5'>");
  document.writeln("      <div class='row py-3 px-5'>");
  document.writeln(
    "        <div class='col px-0 text-center'><img class='img-fluid' src='../img/桌機index_img/footer/1.png' alt=''>"
  );
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col px-0 text-center'><img class='img-fluid' src='../img/桌機index_img/footer/2.png' alt=''>"
  );
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col px-0 text-center'><img class='img-fluid' src='../img/桌機index_img/footer/3.png' alt=''>"
  );
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col px-0 text-center'><img class='img-fluid' src='../img/桌機index_img/footer/4.png' alt=''>"
  );
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col px-0 text-center'><img class='img-fluid' src='../img/桌機index_img/footer/5.png' alt=''>"
  );
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col px-0 text-center'><img class='img-fluid' src='../img/桌機index_img/footer/6.png' alt=''>"
  );
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col px-0 text-center'><img class='img-fluid' src='../img/桌機index_img/footer/7.png' alt=''>"
  );
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("      <div class='row m-0'>");
  document.writeln("        <div class='col-12'>");
  document.writeln(
    "          <p class='text-center txt_secondary'>博天堂918擁有歐洲政府（MGA）和菲律賓政府（PAGCOR）頒發的合法執照。</p>"
  );
  document.writeln(
    "          <p class='text-center txt_secondary'>註冊於英屬維爾京群島，是受國際行業協會認可的合法公司。進行註冊娛樂前，請確保您滿18歲！</p>"
  );
  document.writeln("        </div>");
  document.writeln("        <div class='col-12' id='breadcrumb1'>");
  document.writeln("          <nav aria-label='breadcrumb'>");
  document.writeln(
    "            <ol class='breadcrumb justify-content-center p-0 mb-0 pt-2'>"
  );
  document.writeln(
    "              <li class='breadcrumb-item fsz-06'><a class='text-decoration-none p-0 w3-hover-text-light-gray'"
  );
  document.writeln("                  href='../index.html'>Home</a>");
  document.writeln("              </li>");
  document.writeln(
    "              <li class='breadcrumb-item fsz-06'><a class='text-decoration-none p-0 w3-hover-text-light-gray'"
  );
  document.writeln(
    "                  href='../page/MyPurse.html'>幫助中心</a></li>"
  );
  document.writeln(
    "              <li class='breadcrumb-item fsz-06'><a class='text-decoration-none p-0 w3-hover-text-light-gray'"
  );
  document.writeln(
    "                  href='../page/MyPurse.html'>邀請好友</a></li>"
  );
  document.writeln(
    "              <li class='breadcrumb-item fsz-06'><a class='text-decoration-none p-0 w3-hover-text-light-gray'"
  );
  document.writeln(
    "                  href='../header page/3FAQ.html'>常見問題</a></li>"
  );
  document.writeln(
    "              <li class='breadcrumb-item fsz-06'><a class='text-decoration-none p-0 w3-hover-text-light-gray'"
  );
  document.writeln(
    "                  href='../page/MyPurse.html'>合營代理</a></li>"
  );
  document.writeln(
    "              <li class='breadcrumb-item fsz-06'><a class='text-decoration-none p-0 w3-hover-text-light-gray'"
  );
  document.writeln("                  href='../index.html'>娛樂城</a></li>");
  document.writeln(
    "              <li class='breadcrumb-item fsz-06'><a class='text-decoration-none p-0 w3-hover-text-light-gray'"
  );
  document.writeln("                  href='../index.html'>百家樂</a></li>");
  document.writeln(
    "              <li class='breadcrumb-item fsz-06'><a class='text-decoration-none p-0 w3-hover-text-light-gray'"
  );
  document.writeln(
    "                  href='../page/gameIntroduction.html'>遊戲介紹</a></li>"
  );
  document.writeln(
    "              <li class='breadcrumb-item fsz-06'><a class='text-decoration-none p-0 w3-hover-text-light-gray'"
  );
  document.writeln(
    "                  href='../page/Blog.html'>娛樂城文章分享</a></li>"
  );
  document.writeln("          </nav>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("");
  document.writeln("");
  document.writeln("    </div>");
  document.writeln("    <blockquote class='blockquote py-3 m-0'>");
  document.writeln(
    "      <footer class='blockquote-footer centerCenter'>版權所有 ©2020-2025 博天堂918 保留所有權</footer>"
  );
  document.writeln("    </blockquote>");
  document.writeln("  </div>");
  document.writeln("  <script src='../js/hoverList.js'></script>");
  document.writeln("");
}

// MD Footer
function MDFooter() {
  document.writeln(
    "<div id='indexFooterBtnItemBG' class='m-0 p-0 container-fluid d-none vh-100 fixed-bottom'"
  );
  document.writeln("    style='background-color: #000;opacity: .5;'></div>");
  document.writeln(
    "  <div id='footerHCopy' class='container-fluid d-md-none p-0 m-0 fixed-bottom bg-gradient-theme'>"
  );
  document.writeln("    <div class='container m-0 p-0 centerCenter'>");
  document.writeln(
    "      <div class='row m-0 p-0 py-1 d-none' id='indexFooterBtnItem'>"
  );
  document.writeln("        <a class='col' href='../page/deposit.html'>");
  document.writeln(
    "          <img src='../img/手機index_img/bottomList/Frame 620.png' class='img-fluid' alt=''>"
  );
  document.writeln("        </a>");
  document.writeln("        <a class='col' href='../page/withdrawal.html'>");
  document.writeln(
    "          <img src='../img/手機index_img/bottomList/Frame 621.png' class='img-fluid' alt=''>"
  );
  document.writeln("        </a>");
  document.writeln(
    "        <a class='col' href='../page/PlatformTransfer.html'>"
  );
  document.writeln(
    "          <img src='../img/手機index_img/bottomList/Frame 622.png' class='img-fluid' alt=''>"
  );
  document.writeln("        </a>");
  document.writeln("      </div>");
  document.writeln("      <div class='row px-0 py-1 m-0'>");
  document.writeln(
    "        <div class='col centerCenter px-0 card_c uk-blend-luminosity'>"
  );
  document.writeln("          <a href='../index.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/bottomList/bottomList1.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col centerCenter px-0 card_c uk-blend-luminosity'>"
  );
  document.writeln("          <a href='../page/Promotion.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/bottomList/bottomList2.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col centerCenter px-0 card_c uk-blend-luminosity'>"
  );
  document.writeln("          <div id='indexFooterBtn' class='centerCenter'>");
  document.writeln(
    "            <img src='../img/手機index_img/bottomList/bottomList3.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col centerCenter px-0 card_c uk-blend-luminosity'>"
  );
  document.writeln("          <a href='../page/CustomerService.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/bottomList/bottomList4.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/MyPurse.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/bottomList/bottomList5.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("  </div>");
  document.writeln("  <script src='../js/indexFooterBtn.js'></script>");
  document.writeln("  <script src='./js/Addhtml.js'></script>");
  document.writeln("");
}

// MyPurse
// function MyPurse() {
//   document.write(
//     " <div class='container-fluid p-0 m-0 d-none d-md-block CardBg_BG px-3'>"
//   );
//   document.write("");
//   document.write(
//     "    <!-- <div class='row m-0 p-0 min-vh-100 bg-danger' id='dropdown_menu_BG'></div> -->"
//   );
//   document.write("    <div class='centerCenter container p-0 min-vh-100'>");
//   document.write("      <div class='row py-3'>");
//   document.write("        <div class='col-12 px-0 py-3'>");
//   document.write("          <!-- 右字 media -->");
//   document.write(
//     "          <!-- <div class='media CardBgMd_txt_BG p-3 centerCenter'>"
//   );
//   document.write("            <div class='centerCenter p-0'>");
//   document.write(
//     "              <img src='../img/桌機index_img/user.png' class='img-fluid' alt=''>"
//   );
//   document.write("            </div>");
//   document.write("            <div class='media-body pl-3'>");
//   document.write("              <div class=''>");
//   document.write("                <span class=''>0987123654</span>");
//   document.write(
//     "                <img src='../img/桌機各分頁img/MyPurse/V1.png' class='img-fluid pl-1' alt=''>"
//   );
//   document.write("              </div>");
//   document.write("              <span class=''>$3,000.00</span>");
//   document.write("            </div>");
//   document.write("");
//   document.write("          </div> -->");
//   document.write("");
//   document.write("          <!-- 照片switch -->");
//   document.write("          <div class='row px-3'>");
//   document.write("            <!-- MMOD -->");
//   document.write("            <ul id='UkBgc'");
//   document.write(
//     "              class='uk-subnavt pb-5 px-0 pt-3 col-4 row col-xl-3 CardBgMd-txt text-center m-0  justify-content-center align-self-start'"
//   );
//   document.write("              uk-switcher>");
//   document.write(
//     "              <li class='w-100 pl-2 pl-lg-3 py-1 bg-transparent'>"
//   );
//   document.write("                <div class='row centerCenter'>");
//   document.write("                  <div class='col-12 text-center pl-1'>");
//   document.write(
//     "                    <img src='../img/桌機index_img/user.png' class='img-fluid' alt=''>"
//   );
//   document.write("                  </div>");
//   document.write("                  <div class='col-12 centerCenter'>");
//   document.write("                    <span class=''>0987123654</span>");
//   document.write(
//     "                    <img src='../img/桌機各分頁img/MyPurse/V1.png' class='img-fluid pl-1' alt=''>"
//   );
//   document.write("                  </div>");
//   document.write(
//     "                  <div class='col-12 uk-inline centerCenter pl-1'>"
//   );
//   document.write(
//     "                    <button class='uk-button bg-transparent tr fsz-1 m-0 p-0 text-right' type=' button'"
//   );
//   document.write(
//     "                      aria-expanded='false' style='z-index: 1;'>"
//   );
//   document.write("                      <span>$3,000.00</span>");
//   document.write(
//     "                      <i class='fa-solid fa-angle-down pl-2' style='margin-top: -5px;'></i>"
//   );
//   document.write("                    </button>");
//   document.write("                    <!-- UK_dropdown 控制位置 -->");
//   document.write(
//     "                    <!-- div uk-dropdown='mode: click;pos: bottom-center;'"
//   );
//   document.write(
//     "                      class='py-1 px-4 m-0 uk-dropdown uk-dropdown-bottom-right pb-3'"
//   );
//   document.write(
//     "                      style='background-color: rgba(0, 0, 0, 0.8); width: 18vw;z-index: 99999999999;height: 600px;overflow: scroll;'> -->"
//   );
//   document.write(
//     "                    <div uk-dropdown='mode: click;pos: bottom-center;' class='py-1 px-3 m-0 pb-3 arrow_up1'"
//   );
//   document.write(
//     "                      style='background-color: rgba(0, 0, 0, 0.8); width: 16vw;z-index: 99999999999;'>"
//   );
//   document.write("                      <style>");
//   document.write("                        .arrow_up1:before {");
//   document.write(
//     "                          border-bottom: .5rem solid rgba(0, 0, 0, .8);"
//   );
//   document.write(
//     "                          border-left: .35rem solid transparent;"
//   );
//   document.write(
//     "                          border-right: .35rem solid transparent;"
//   );
//   document.write("                          content: '';");
//   document.write("                          position: absolute;");
//   document.write("                          right: 3.95rem;");
//   document.write("                          top: -.5rem;");
//   document.write("                        }");
//   document.write("                      </style>");
//   document.write("                      <!-- MMC -->");
//   document.write(
//     "                      <div class=' py-3' style='height: 250px;overflow-y: scroll;overflow-x: hidden;'>"
//   );
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>DG真人</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>歐博真人</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>SA真人</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>WM真人</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>OB真人</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>OG真人</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>SUPER體育</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>OB體育</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>SUPER彩票</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>9K彩票</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>DT電子</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>SP電子</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>RTG電子</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>BNG電子</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>必贏電子</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>PLAY電子</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>博樂棋牌</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>OB棋牌</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>SP捕魚</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <div class='row px-3 py-1 text-light'>"
//   );
//   document.write(
//     "                          <div class='col px-0 border-right border-secondary py-0'>必贏捕魚</div>"
//   );
//   document.write(
//     "                          <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='row pt-3 border-top border-secondary'>"
//   );
//   document.write(
//     "                        <div class='col text-right pl-2 text-theme5'>總額度:3,000.00</div>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <button class='btn bg-theme3 rounded rounded-pill py-1 my-1 btn-block text-light'>"
//   );
//   document.write("                        一鍵轉回");
//   document.write("                      </button>");
//   document.write("                    </div>");
//   document.write("                    <!-- ........ -->");
//   document.write(
//     "                    <!-- <button class='uk-button bg-transparent p-0 text-right uk-position-relative dropdown_menu'"
//   );
//   document.write("                      type=' button'>");
//   document.write("                      $3,000.00");
//   document.write(
//     "                      <i class='fa-solid fa-angle-down pl-2' style='margin-top: -5px;'></i>"
//   );
//   document.write("                    </button>");
//   document.write(
//     "                    <div id='dropdown_menu' class='uk-position-absolute uk-position-top-center w-100 py-2 px-4'"
//   );
//   document.write(
//     "                      style='background-color: rgba(0, 0, 0, 0.8);top: 30px; z-index: 999999999;'>"
//   );
//   document.write(
//     "                      <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                        <div class='col px-0 border-right border-secondary py-0'>DG真人</div>"
//   );
//   document.write(
//     "                        <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                        <div class='col px-0 border-right border-secondary py-0'>歐博真人</div>"
//   );
//   document.write(
//     "                        <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                        <div class='col px-0 border-right border-secondary py-0'>SA真人</div>"
//   );
//   document.write(
//     "                        <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                        <div class='col px-0 border-right border-secondary py-0'>WM真人</div>"
//   );
//   document.write(
//     "                        <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                        <div class='col px-0 border-right border-secondary py-0'>OB真人</div>"
//   );
//   document.write(
//     "                        <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                        <div class='col px-0 border-right border-secondary py-0'>OG真人</div>"
//   );
//   document.write(
//     "                        <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                        <div class='col px-0 border-right border-secondary py-0'>SUPER體育</div>"
//   );
//   document.write(
//     "                        <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
//   );
//   document.write(
//     "                        <div class='col px-0 border-right border-secondary py-0'>OB體育</div>"
//   );
//   document.write(
//     "                        <div class='col pl-2 text-theme5'>0</div>"
//   );
//   document.write("                      </div>");
//   document.write("                      <div class='row pt-5'>");
//   document.write(
//     "                        <div class='col text-right pl-2 text-theme5'>總額度:3,000.00</div>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <button class='btn bg-theme3 rounded rounded-pill py-1 my-1 btn-block text-light'>"
//   );
//   document.write("                        一鍵轉回");
//   document.write("                      </button>");
//   document.write("                    </div> -->");
//   document.write("                  </div>");
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("");
//   document.write("              <!--  -->");
//   document.write(
//     "              <li class='col-3 m-0 pb-3 px-0 bg-transparent uk-active centerCenter'>"
//   );
//   document.write("                <div class='p-1 cursor_pointer'>");
//   document.write(
//     "                  <img src='../img/手機各分頁img/mypurse/1.png' class='img-fluid' alt=''>"
//   );
//   document.write(
//     "                  <p class='fsz09 text-center font-weight-bold text-dark text-nowrap'>我的錢包</p>"
//   );
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write(
//     "              <li class='col-3 pb-3 px-0 bg-transparent centerCenter'>"
//   );
//   document.write(
//     "                <div class='p-1 cursor_pointer text-center pt-4'>"
//   );
//   document.write(
//     "                  <img src='../img/手機各分頁img/mypurse/2.png' class='img-fluid' alt=''>"
//   );
//   document.write(
//     "                  <p class='fsz09 text-center font-weight-bold text-dark text-nowrap'>投注紀錄</p>"
//   );
//   document.write(
//     "                  <p class='fsz-08 text-center text-secondary text-nowrap'>(返水查詢)</p>"
//   );
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write(
//     "              <li class='col-3 pb-3 px-0 bg-transparent centerCenter'>"
//   );
//   document.write(
//     "                <div class='p-1 cursor_pointer text-center pt-4'>"
//   );
//   document.write(
//     "                  <img src='../img/手機各分頁img/mypurse/3.png' class='img-fluid' alt=''>"
//   );
//   document.write(
//     "                  <p class='fsz09 text-center font-weight-bold text-dark text-nowrap'>交易紀錄</p>"
//   );
//   document.write(
//     "                  <p class='fsz-08 text-center text-secondary text-nowrap'>(存提轉)</p>"
//   );
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write(
//     "              <li class='col-3 pb-3 px-0 bg-transparent centerCenter'>"
//   );
//   document.write(
//     "                <div class='p-1 cursor_pointer text-center'>"
//   );
//   document.write(
//     "                  <img src='../img/手機各分頁img/mypurse/4.png' class='img-fluid' alt=''>"
//   );
//   document.write(
//     "                  <p class='fsz09 text-center font-weight-bold text-dark text-nowrap'>帳戶管理</p>"
//   );
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("");
//   document.write("");
//   document.write("              <li class='w-100 pl-2 pl-lg-3 py-1'>");
//   document.write("                <a href='#' class='' type='button'>");
//   document.write(
//     "                  <img src='../img/桌機index_img/list/clickList/PC/1.png' class='img-fluid' alt=''>"
//   );
//   document.write(
//     "                  <span class='h5 pl-0 pl-xl-2'>個人資料</span>"
//   );
//   document.write("                </a>");
//   document.write("              </li>");
//   document.write("              <li class='w-100 pl-2 pl-lg-3 py-1'>");
//   document.write("                <a href='#' class='' type='button'>");
//   document.write(
//     "                  <img src='../img/桌機index_img/list/clickList/PC/2.png' class='img-fluid' alt=''>"
//   );
//   document.write(
//     "                  <span class=' h5 pl-0 pl-xl-2'>VIP特權</span>"
//   );
//   document.write("                </a>");
//   document.write("              </li>");
//   document.write("              <li class='w-100 pl-2 pl-lg-3 py-1'>");
//   document.write("                <a href='#' class=' ' type='button'>");
//   document.write(
//     "                  <img src='../img/桌機index_img/list/clickList/PC/3.png' class='img-fluid' alt=''>"
//   );
//   document.write(
//     "                  <span class=' h5 pl-0 pl-xl-2'>優惠達標查詢</span>"
//   );
//   document.write("                </a>");
//   document.write("              </li>");
//   document.write("              <li class='w-100 pl-2 pl-lg-3 py-1'>");
//   document.write("                <a href='#' class=' ' type='button'>");
//   document.write(
//     "                  <img src='../img/桌機index_img/list/clickList/PC/4.png' class='img-fluid' alt=''>"
//   );
//   document.write(
//     "                  <span class=' h5 pl-0 pl-xl-2'>投注紀錄</span>"
//   );
//   document.write("                </a>");
//   document.write("              </li>");
//   document.write("              <li class='w-100 pl-2 pl-lg-3 py-1'>");
//   document.write("                <a href='#' class=' ' type='button'>");
//   document.write(
//     "                  <img src='../img/桌機index_img/list/clickList/PC/5.png' class='img-fluid' alt=''>"
//   );
//   document.write(
//     "                  <span class=' h5 pl-0 pl-xl-2'>交易紀錄</span>"
//   );
//   document.write("                </a>");
//   document.write("              </li>");
//   document.write("              <li class='w-100 pl-2 pl-lg-3 py-1'>");
//   document.write("                <a href='#' class=' ' type='button'>");
//   document.write(
//     "                  <img src='../img/桌機index_img/list/clickList/PC/6.png' class='img-fluid' alt=''>"
//   );
//   document.write(
//     "                  <span class=' h5 pl-0 pl-xl-2'>帳戶管理</span>"
//   );
//   document.write("                </a>");
//   document.write("              </li>");
//   document.write("              <!-- 導向網頁 -->");
//   document.write(
//     "              <!-- <li class='w-100 pl-2 pl-lg-3 py-1' onclick='window.location.assign('./inviteFriends.html');'> -->"
//   );
//   document.write("              <li class='w-100 pl-2 pl-lg-3 py-1'>");
//   document.write(
//     "                <a href='./inviteFriends.html' class=' ' type='button'>"
//   );
//   document.write(
//     "                  <img src='../img/桌機index_img/list/clickList/PC/7.png' class='img-fluid' alt=''>"
//   );
//   document.write(
//     "                  <span class=' h5 pl-0 pl-xl-2'>邀請好友</span>"
//   );
//   document.write("                </a>");
//   document.write("              </li>");
//   document.write("              <li class='w-100 pl-2 pl-lg-3 py-1'>");
//   document.write("                <a href='#' class=' ' type='button'>");
//   document.write("");
//   document.write("                  <div class='media'>");
//   document.write(
//     "                    <img src='../img/桌機index_img/list/clickList/PC/8.png' class='img-fluid' alt=''>"
//   );
//   document.write("                    <div class='media-body'>");
//   document.write(
//     "                      <span class='h5 pl-0 pl-xl-2'>幫助中心</span>"
//   );
//   document.write(
//     "                      <p class='pl-0 pl-xl-2 fsz-08'>(存款、提款、投注疑問看這裡)</p>"
//   );
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("");
//   document.write("                </a>");
//   document.write("              </li>");
//   document.write("              <!-- <li class=' pl-2'>");
//   document.write("                <a href='#' class=' d-flex' type='button'>");
//   document.write(
//     "                  <img src='../img/桌機index_img/list/clickList/PC/7.png' class='img-fluid' alt=''>"
//   );
//   document.write("                  <div class='pl-0 pl-lg-2'>");
//   document.write("                    <p class='text-dark'>幫助中心</p>");
//   document.write(
//     "                    <span class='text-secondary fsz-08'>(存款、提款、投注疑問看這裡)</span>"
//   );
//   document.write("                  </div>");
//   document.write("                </a>");
//   document.write("              </li> -->");
//   document.write("            </ul>");
//   document.write("");
//   document.write(
//     "            <ul class='uk-switcher col-8 col-xl-9 justify-content-center'>"
//   );
//   document.write(
//     "              <!-- <li class='text-center pl-3 w-100 uk-disabled'></li> -->"
//   );
//   document.write("              <!-- MOD -->");
//   document.write("              <li class='text-center pl-3 w-100'>");
//   document.write(
//     "                <div class='col-12 CardBgMd_txt_BG py-3 px-0'>"
//   );
//   document.write("                  <div class=' py-1'>");
//   document.write(
//     "                    <!-- <p class='col-12 py-3 h3 font-weight-bold'>轉點</p> -->"
//   );
//   document.write("");
//   document.write("                    <div class='row p-3'>");
//   document.write(
//     "                      <div class='col-4 row centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <span class='pr-0 pr-md-2 col-3 text-center text-theme2'>轉出</span>"
//   );
//   document.write(
//     "                        <select class='custom-select col-9 bd-theme btn-block'>"
//   );
//   document.write(
//     "                          <option selected=''>主帳戶 &nbsp 1,500</option>"
//   );
//   document.write("                          <option value='1'>D銀行</option>");
//   document.write("                          <option value='2'>C銀行</option>");
//   document.write("                          <option value='3'>H銀行</option>");
//   document.write("                        </select>");
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='col-4 row centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <span class='pr-0 pr-md-2 col-3 text-center text-theme'>轉入</span>"
//   );
//   document.write(
//     "                        <select class='custom-select col-9 bd-theme btn-block'>"
//   );
//   document.write(
//     "                          <option selected=''>請選擇</option>"
//   );
//   document.write("                          <option value='1'>D銀行</option>");
//   document.write("                          <option value='2'>C銀行</option>");
//   document.write("                          <option value='3'>H銀行</option>");
//   document.write("                        </select>");
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='col-4 row centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <span class='pr-0 pr-md-2 col-3 text-center'>金額</span>"
//   );
//   document.write(
//     "                        <input class='form-control w-auto d-inline bd-theme col-9' type='text' placeholder='請輸入金額'>"
//   );
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("");
//   document.write("                    <div class='row p-3'>");
//   document.write(
//     "                      <div class='col-3 centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <span class='fsz-12'>主帳戶:</span><span class='fsz-12 pl-2'>1,500</span>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='col-3 centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <span class='fsz-12'>總額度:</span><span class='fsz-12 pl-2'>3,300</span>"
//   );
//   document.write("");
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='col-3 centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <button type='button' class='btn btn-block bd-theme text-theme rounded'>轉回主帳戶"
//   );
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='col-3 centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <button type='button' class='btn btn-block bg-theme3 text-light rounded'>確定"
//   );
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("");
//   document.write("                    <!-- MOD -->");
//   document.write("                    <div class='row px-5'>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>DG真人</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>歐博真人</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>SA真人</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>WM真人</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>SUPER體育</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>博天堂體育</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>SUPER彩票</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>9K彩票</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>DT電子</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>SP電子</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>BNG電子</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>RTG電子</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>必贏電子</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>PLAY電子</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>博樂棋牌</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>OB棋牌</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>必贏捕魚</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>SP捕魚</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("");
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("              <!-- 無緣無故的縮版 -->");
//   document.write("              <!-- 存款li -->");
//   document.write("              <!-- <li class='text-center pl-3 w-100'>");
//   document.write("");
//   document.write(
//     "                <p class='col-12 py-3 h3 font-weight-bold'>請選擇付款方式</p>"
//   );
//   document.write(
//     "                <ul class='uk-subnav CardBgMd-txt py-3 text-left justify-content-start px-3' uk-switcher>"
//   );
//   document.write("                  <li class='card_c mr-3'>");
//   document.write("                    <a href='#' class=''>");
//   document.write(
//     "                      <img src='../img/桌機各分頁img/MyPurse/Frame 1195.png' alt=''>"
//   );
//   document.write("                    </a>");
//   document.write("                  </li>");
//   document.write(
//     "                  <li class='card_c uk-blend-luminosity mr-3'>"
//   );
//   document.write("                    <a href='#' class=''>");
//   document.write(
//     "                      <img src='../img/桌機各分頁img/MyPurse/Frame 1196.png' alt=''>"
//   );
//   document.write("                    </a>");
//   document.write("                  </li>");
//   document.write(
//     "                  <li class='card_c uk-blend-luminosity mr-3'>"
//   );
//   document.write("                    <a href='#' class=''>");
//   document.write(
//     "                      <img src='../img/桌機各分頁img/MyPurse/Frame 1197.png' alt=''>"
//   );
//   document.write("                    </a>");
//   document.write("                  </li>");
//   document.write("                </ul>");
//   document.write("");
//   document.write("                <ul class='uk-switcher'>");
//   document.write("                  <li class='uk-active'>");
//   document.write(
//     "                    <div class=' CardBgMd_txt_BG p-3 rounded border'>"
//   );
//   document.write("                      <div class='row'>");
//   document.write(
//     "                        <div class='col-12 font-weight-bold py-2'>"
//   );
//   document.write(
//     "                          <span class='pr-3 col-5'>付款通道</span>"
//   );
//   document.write(
//     "                          <select class='custom-select col-7 bd-theme'>"
//   );
//   document.write(
//     "                            <option selected>富邦銀行</option>"
//   );
//   document.write(
//     "                            <option value='1'>D銀行</option>"
//   );
//   document.write(
//     "                            <option value='2'>C銀行</option>"
//   );
//   document.write(
//     "                            <option value='3'>H銀行</option>"
//   );
//   document.write("                          </select>");
//   document.write(
//     "                          <p class='p-3 text-danger fsz09'>請使用綁訂得帳戶轉帳，轉帳金額務必與訂單金額一致</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write(
//     "                    <div class=' CardBgMd_txt_BG p-3 rounded border mt-3'>"
//   );
//   document.write("                      <div class='row'>");
//   document.write(
//     "                        <div class='col-12 font-weight-bold py-2'>"
//   );
//   document.write("                          <span class=''>存款金額</span>");
//   document.write("");
//   document.write("                          <div class='input-group'>");
//   document.write(
//     "                            <div class='input-group-prepend'>"
//   );
//   document.write(
//     "                              <span class='input-group-text bg-transparent' id='basic-addon1'>$</span>"
//   );
//   document.write("                            </div>");
//   document.write(
//     "                            <input type='text' class='form-control' placeholder='單筆存款金額 500-50000' aria-label='Username'"
//   );
//   document.write(
//     "                              aria-describedby='basic-addon1'>"
//   );
//   document.write("                          </div>");
//   document.write("");
//   document.write(
//     "                          <p class='px-2 text-danger fsz09'>刷卡需收10%手續費，最低儲值金額1,000</p>"
//   );
//   document.write("                          <div class='py-3'>");
//   document.write(
//     "                            <button class='btn bg-theme3 text-light w-25'>立即存款</button>"
//   );
//   document.write("                          </div>");
//   document.write(
//     "                          <p class='font-weight-bold text-dark'>如需幫助，請"
//   );
//   document.write(
//     "                            <button type='button' class='uk-button bg-transparent text-theme centerCenter px-0 py-1'"
//   );
//   document.write(
//     "                              data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write(
//     "                              <button type='button' class='uk-button bg-transparent text-theme centerCenter px-0 py-1'"
//   );
//   document.write(
//     "                                data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                                聯繫客服");
//   document.write("                              </button>");
//   document.write("                            </button>");
//   document.write("                          </p>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("                  </li>");
//   document.write("                  <li>");
//   document.write(
//     "                    <div class=' CardBgMd_txt_BG p-3 rounded border'>"
//   );
//   document.write("                      <div class='row'>");
//   document.write(
//     "                        <div class='col-12 font-weight-bold py-2'>"
//   );
//   document.write(
//     "                          <span class='pr-3 col-5'>付款通道</span>"
//   );
//   document.write(
//     "                          <select class='custom-select col-7'>"
//   );
//   document.write(
//     "                            <option selected>全家超商</option>"
//   );
//   document.write(
//     "                            <option value='1'>D銀行</option>"
//   );
//   document.write(
//     "                            <option value='2'>C銀行</option>"
//   );
//   document.write(
//     "                            <option value='3'>H銀行</option>"
//   );
//   document.write("                          </select>");
//   document.write(
//     "                          <p class='p-3 text-danger fsz09'>請保留繳費單，以供審核使用</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write(
//     "                    <div class=' CardBgMd_txt_BG p-3 rounded border mt-3'>"
//   );
//   document.write("                      <div class='row'>");
//   document.write(
//     "                        <div class='col-12 font-weight-bold py-2'>"
//   );
//   document.write("                          <span class=''>存款金額</span>");
//   document.write("                          <div class='input-group'>");
//   document.write(
//     "                            <div class='input-group-prepend'>"
//   );
//   document.write(
//     "                              <span class='input-group-text bg-transparent' id='basic-addon1'>$</span>"
//   );
//   document.write("                            </div>");
//   document.write(
//     "                            <input type='text' class='form-control' placeholder='單筆存款金額 500-50000' aria-label='Username'"
//   );
//   document.write(
//     "                              aria-describedby='basic-addon1'>"
//   );
//   document.write("                          </div>");
//   document.write("                          <div class='py-3'>");
//   document.write(
//     "                            <button class='btn bg-theme3 text-light w-25'>立即存款</button>"
//   );
//   document.write("                          </div>");
//   document.write(
//     "                          <p class='font-weight-bold text-dark'>如需幫助，請 <button type='button'"
//   );
//   document.write(
//     "                              class='uk-button bg-transparent text-theme centerCenter px-0 py-1' data-toggle='modal'"
//   );
//   document.write(
//     "                              data-target='#exampleModalCenter2'>"
//   );
//   document.write(
//     "                              <button type='button' class='uk-button bg-transparent text-theme centerCenter px-0 py-1'"
//   );
//   document.write(
//     "                                data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                                聯繫客服");
//   document.write("                              </button>");
//   document.write("                            </button>");
//   document.write("                          </p>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("                  </li>");
//   document.write("                  <li>");
//   document.write(
//     "                    <div class='CardBgMd_txt_BG p-3 rounded border'>"
//   );
//   document.write("                      <div class='row'>");
//   document.write(
//     "                        <div class='col-12 font-weight-bold py-2'>"
//   );
//   document.write(
//     "                          <span class='pr-3 col-5'>付款通道</span>"
//   );
//   document.write(
//     "                          <select class='custom-select col-7'>"
//   );
//   document.write(
//     "                            <option selected>信用卡(信用卡渠道)</option>"
//   );
//   document.write(
//     "                            <option value='1'>D銀行</option>"
//   );
//   document.write(
//     "                            <option value='2'>C銀行</option>"
//   );
//   document.write(
//     "                            <option value='3'>H銀行</option>"
//   );
//   document.write("                          </select>");
//   document.write(
//     "                          <p class='p-3 text-danger fsz09'>存款請使用本人銀行操作，若非本人而影響出款權益須自行承擔"
//   );
//   document.write("                          </p>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write(
//     "                    <div class='CardBgMd_txt_BG p-3 rounded border mt-3'>"
//   );
//   document.write("                      <div class='row'>");
//   document.write(
//     "                        <div class='col-12 font-weight-bold py-2'>"
//   );
//   document.write("                          <span class=''>存款金額</span>");
//   document.write("                          <div class='input-group'>");
//   document.write(
//     "                            <div class='input-group-prepend'>"
//   );
//   document.write(
//     "                              <span class='input-group-text bg-transparent' id='basic-addon1'>$</span>"
//   );
//   document.write("                            </div>");
//   document.write(
//     "                            <input type='text' class='form-control' placeholder='單筆存款金額 500-50000' aria-label='Username'"
//   );
//   document.write(
//     "                              aria-describedby='basic-addon1'>"
//   );
//   document.write("                          </div>");
//   document.write(
//     "                          <p class='px-2 text-danger fsz09'>刷卡需收10%手續費，最低儲值金額1,000</p>"
//   );
//   document.write("                          <div class='py-3'>");
//   document.write(
//     "                            <button class='btn bg-theme3 text-light w-25'>立即存款</button>"
//   );
//   document.write("                          </div>");
//   document.write(
//     "                          <p class='font-weight-bold text-dark'>如需幫助，請 <button type='button'"
//   );
//   document.write(
//     "                              class='uk-button bg-transparent text-theme centerCenter px-0 py-1' data-toggle='modal'"
//   );
//   document.write(
//     "                              data-target='#exampleModalCenter2'>"
//   );
//   document.write(
//     "                              <button type='button' class='uk-button bg-transparent text-theme centerCenter px-0 py-1'"
//   );
//   document.write(
//     "                                data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                                聯繫客服");
//   document.write("                              </button>");
//   document.write("                            </button>");
//   document.write("                          </p>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("                  </li>");
//   document.write("                </ul>");
//   document.write("");
//   document.write("              </li> -->");
//   document.write("              <!-- 提款li -->");
//   document.write("              <!-- <li class='text-center pl-3 w-100'>");
//   document.write(
//     "                <div class='col-12 CardBgMd_txt_BG py-3 px-0 vh-100'>"
//   );
//   document.write("                  <div class=' py-1'>");
//   document.write(
//     "                    <p class='col-12 py-3 h3 font-weight-bold'>銀行帳戶</p>"
//   );
//   document.write("                    <div class='row px-3'>");
//   document.write(
//     "                      <div class='col-12 font-weight-bold py-2 clearfix'>"
//   );
//   document.write(
//     "                        <span class='pr-3'>台北富邦****9768</span>"
//   );
//   document.write(
//     "                        <span class='float-right'><img src='../img/手機各分頁img/Subtract.png' alt=''></span>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <a href='./AddBankAccount.html' class='btn col-12 font-weight-bold py-2  text-left'>"
//   );
//   document.write(
//     "                        <img src='../img/手機各分頁img/carbon_add-filled.png' alt=''>"
//   );
//   document.write(
//     "                        <span class='pr-3 text-theme font-weight-bold'>新增銀行帳戶</span>"
//   );
//   document.write("                      </a>");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("                  <div class='px-3 pt-5 rounded'>");
//   document.write(
//     "                    <p class='px-2 text-dark py-3 '>每天一次免費次數，第二次起手續費收取1%</p>"
//   );
//   document.write("                    <div class='input-group'>");
//   document.write("                      <div class='input-group-prepend'>");
//   document.write(
//     "                        <span class='input-group-text bg-transparent' id='basic-addon1'>$</span>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <input type='text' class='form-control' placeholder='單筆存款金額 500-50000' aria-label='Username'"
//   );
//   document.write("                        aria-describedby='basic-addon1'>");
//   document.write("                    </div>");
//   document.write(
//     "                    <p class='px-2 text-danger fsz09'>你尚有未完成流水1000.00，無法進行提款</p>"
//   );
//   document.write("                    <div class='text-center py-2'>");
//   document.write(
//     "                      <button class='btn btn-block bg-theme3 text-light'>立即提款</button>"
//   );
//   document.write("                    </div>");
//   document.write(
//     "                    <p class='px-2 text-dark fsz09 py-1'>為了方便您快速提款，請將全部金額轉回主錢包</p>"
//   );
//   document.write(
//     "                    <p class='font-weight-bold text-dark px-5 text-center'>如需幫助，請 <button type='button'"
//   );
//   document.write(
//     "                        class='uk-button bg-transparent text-theme centerCenter px-0 py-1' data-toggle='modal'"
//   );
//   document.write("                        data-target='#exampleModalCenter2'>");
//   document.write(
//     "                        <button type='button' class='uk-button bg-transparent text-theme centerCenter px-0 py-1'"
//   );
//   document.write(
//     "                          data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                          聯繫客服");
//   document.write("                        </button>");
//   document.write("                      </button>");
//   document.write("                    </p>");
//   document.write("                  </div>");
//   document.write("                </div>");
//   document.write("              </li> -->");
//   document.write("");
//   document.write("              <li class='uk-active text-center pl-3 w-100'>");
//   document.write(
//     "                <div class='col-12 CardBgMd_txt_BG py-3 px-0'>"
//   );
//   document.write("                  <div class=' py-1'>");
//   document.write(
//     "                    <!-- <p class='col-12 py-3 h3 font-weight-bold'>轉點</p> -->"
//   );
//   document.write("");
//   document.write("                    <div class='row p-3'>");
//   document.write(
//     "                      <div class='col-4 row centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <span class='pr-0 pr-md-2 col-3 text-center text-theme2'>轉出</span>"
//   );
//   document.write(
//     "                        <select class='custom-select col-9 bd-theme btn-block'>"
//   );
//   document.write(
//     "                          <option selected=''>主帳戶 &nbsp 1,500</option>"
//   );
//   document.write("                          <option value='1'>D銀行</option>");
//   document.write("                          <option value='2'>C銀行</option>");
//   document.write("                          <option value='3'>H銀行</option>");
//   document.write("                        </select>");
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='col-4 row centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <span class='pr-0 pr-md-2 col-3 text-center text-theme'>轉入</span>"
//   );
//   document.write(
//     "                        <select class='custom-select col-9 bd-theme btn-block'>"
//   );
//   document.write(
//     "                          <option selected=''>請選擇</option>"
//   );
//   document.write("                          <option value='1'>D銀行</option>");
//   document.write("                          <option value='2'>C銀行</option>");
//   document.write("                          <option value='3'>H銀行</option>");
//   document.write("                        </select>");
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='col-4 row centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <span class='pr-0 pr-md-2 col-3 text-center'>金額</span>"
//   );
//   document.write(
//     "                        <input class='form-control w-auto d-inline bd-theme col-9' type='text' placeholder='請輸入金額'>"
//   );
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("");
//   document.write("                    <div class='row p-3'>");
//   document.write(
//     "                      <div class='col-3 centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <span class='fsz-12'>主帳戶:</span><span class='fsz-12 pl-2'>1,500</span>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='col-3 centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <span class='fsz-12'>總額度:</span><span class='fsz-12 pl-2'>3,300</span>"
//   );
//   document.write("");
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='col-3 centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <button type='button' class='btn btn-block bd-theme text-theme rounded'>轉回主帳戶"
//   );
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='col-3 centerCenter font-weight-bold py-2'>"
//   );
//   document.write(
//     "                        <button type='button' class='btn btn-block bg-theme3 text-light rounded'>確定"
//   );
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("");
//   document.write("                    <!-- MOD -->");
//   document.write("                    <div class='row px-5'>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>DG真人</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>歐博真人</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>SA真人</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>WM真人</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>SUPER體育</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>博天堂體育</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>SUPER彩票</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>9K彩票</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>DT電子</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>SP電子</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>BNG電子</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>RTG電子</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>必贏電子</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>PLAY電子</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>博樂棋牌</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>OB棋牌</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write(
//     "                          <p class='text-center'>必贏捕魚</p>"
//   );
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write(
//     "                      <button class='btn font-weight-bold w-auto col-4 col-lg-3 my-3 my-lg-2' style='height: 6rem;'>"
//   );
//   document.write("                        <div class='p-3 bg-theme4 rounded'>");
//   document.write("                          <p class='text-center'>SP捕魚</p>");
//   document.write(
//     "                          <p class='text-center text-theme'>$100.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </button>");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("");
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("              <li class='text-center pl-3 w-100'>");
//   document.write("                <!-- 投注紀錄 插入 -->");
//   document.write("                <div class='col-12 my-0 CardBgMd_txt_BG'>");
//   document.write(
//     "                  <p class='py-3 h3 font-weight-bold'>投注紀錄日期查詢</p>"
//   );
//   document.write(
//     "                  <form class='p-3 row' action='uk-margin' method='post'>"
//   );
//   document.write(
//     "                    <input class='px-1 py-0 text-secondary col-5 pr-3 rounded border bg-transparent'"
//   );
//   document.write("                      type='datetime-local' name='' id=''>");
//   document.write("                    <div class='p-1 col flex-grow-1'>");
//   document.write("                      <button type='button'");
//   document.write(
//     "                        class='btn bg-theme3 px-4 py-1 rounded rounded-pill text-light text-secondary py-0 rounded'>查詢"
//   );
//   document.write("                      </button>");
//   document.write("                    </div>");
//   document.write("                  </form>");
//   document.write("");
//   document.write("                </div>");
//   document.write("                <div class='CardBgMd_txt_BG my-3 '>");
//   document.write("");
//   document.write(
//     "                  <ul class='uk-subnav uk-subnav-pill  row centerCenter p-3' uk-switcher=''>"
//   );
//   document.write(
//     "                    <li style='width: 23%;' class='uk-active'><a"
//   );
//   document.write(
//     "                        class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                        aria-expanded='true'>今日</a>");
//   document.write("                    </li>");
//   document.write("                    <li style='width: 23%;' class='mx-1'><a");
//   document.write(
//     "                        class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                        aria-expanded='false'>昨日</a>");
//   document.write("                    </li>");
//   document.write("                    <li style='width: 23%;' class='mx-1'><a");
//   document.write(
//     "                        class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                        aria-expanded='false'>本週</a>");
//   document.write("                    </li>");
//   document.write("                    <li style='width: 23%;' class='mx-1'><a");
//   document.write(
//     "                        class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                        aria-expanded='false'>上週</a>");
//   document.write("                    </li>");
//   document.write("                  </ul>");
//   document.write("");
//   document.write(
//     "                  <ul class='uk-switcher px-5 py-2 w3-round-medium uk-active' style='touch-action: pan-y pinch-zoom;'>"
//   );
//   document.write("                    <!-- 今日 -->");
//   document.write("                    <li class='uk-active ' id=''>");
//   document.write("                      <!-- MMC -->");
//   document.write("                      <div class='bettingHistoryParent1'>");
//   document.write("                        <div class='bettingHistoryPage1'>");
//   document.write(
//     "                          <p class='pb-3 h3 font-weight-bold'>投注總計</p>"
//   );
//   document.write("                          <div class='row'>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>投注金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>有效投注:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>輸/贏:</span><span class='text-theme2'>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>返水金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row py-2'>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>真人</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>體育</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>賓果</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>電子</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>棋牌</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write(
//     "                                        <span class='text-theme2'>100.00</span></span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>捕魚</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                        <div class='bettingHistoryPage2'>");
//   document.write(
//     "                          <div class='col-12 mb-3 CardBgMd_txt_BG'>"
//   );
//   document.write("");
//   document.write(
//     "                            <p class='border rounded p-3 mt-3'>"
//   );
//   document.write(
//     "                              <button type='button' class='btn bg-transparent bettingHistoryBtn p-0 pr-3'>"
//   );
//   document.write(
//     "                                <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                              </button>");
//   document.write(
//     "                              共計2筆投注，投注金額200.00 有效投注 100.00 <span class='text-theme2'>輸/贏"
//   );
//   document.write("                                200.00</span>");
//   document.write("                            </p>");
//   document.write("");
//   document.write(
//     "                            <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                              <table class='table table-striped'>"
//   );
//   document.write("                                <thead>");
//   document.write("                                  <tr class='text-center'>");
//   document.write(
//     "                                    <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>平台</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>投注金額</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>有效投注</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>輸/贏</th>"
//   );
//   document.write("                                  </tr>");
//   document.write("                                </thead>");
//   document.write("                                <tbody>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write("");
//   document.write("                                </tbody>");
//   document.write("                              </table>");
//   document.write("                              <!-- 頁碼 -->");
//   document.write("                              <div class='text-center p-2'>");
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                <style>");
//   document.write("                                  .btn-active:hover {");
//   document.write("                                    color: #365a97;");
//   document.write(
//     "                                    border-color: #365a97 !important;"
//   );
//   document.write("                                    font-size: 1.1rem;");
//   document.write("                                  }");
//   document.write("                                </style>");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </li>");
//   document.write("                    <li class=' ' id=''>");
//   document.write("                      <!-- MMC -->");
//   document.write("                      <div class='bettingHistoryParent2'>");
//   document.write("                        <div class='bettingHistoryPage1'>");
//   document.write(
//     "                          <p class='pb-3 h3 font-weight-bold'>投注總計</p>"
//   );
//   document.write("                          <div class='row'>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>投注金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>有效投注:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>輸/贏:</span><span class='text-theme2'>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>返水金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row py-2'>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>真人</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>體育</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>賓果</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>電子</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>棋牌</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write(
//     "                                        <span class='text-theme2'>100.00</span></span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>捕魚</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                        <div class='bettingHistoryPage2'>");
//   document.write(
//     "                          <div class='col-12 mb-3 CardBgMd_txt_BG'>"
//   );
//   document.write("");
//   document.write(
//     "                            <p class='border rounded p-3 mt-3'>"
//   );
//   document.write(
//     "                              <button type='button' class='btn bg-transparent bettingHistoryBtn p-0 pr-3'>"
//   );
//   document.write(
//     "                                <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                              </button>");
//   document.write(
//     "                              共計2筆投注，投注金額200.00 有效投注 100.00 <span class='text-theme2'>輸/贏"
//   );
//   document.write("                                200.00</span>");
//   document.write("                            </p>");
//   document.write("");
//   document.write(
//     "                            <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                              <table class='table table-striped'>"
//   );
//   document.write("                                <thead>");
//   document.write("                                  <tr class='text-center'>");
//   document.write(
//     "                                    <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>平台</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>投注金額</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>有效投注</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>輸/贏</th>"
//   );
//   document.write("                                  </tr>");
//   document.write("                                </thead>");
//   document.write("                                <tbody>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write("");
//   document.write("                                </tbody>");
//   document.write("                              </table>");
//   document.write("                              <!-- 頁碼 -->");
//   document.write("                              <div class='text-center p-2'>");
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                <style>");
//   document.write("                                  .btn-active:hover {");
//   document.write("                                    color: #365a97;");
//   document.write(
//     "                                    border-color: #365a97 !important;"
//   );
//   document.write("                                    font-size: 1.1rem;");
//   document.write("                                  }");
//   document.write("                                </style>");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </li>");
//   document.write("                    <li class=' ' id=''>");
//   document.write("                      <!-- MMC -->");
//   document.write("                      <div class='bettingHistoryParent3'>");
//   document.write("                        <div class='bettingHistoryPage1'>");
//   document.write(
//     "                          <p class='pb-3 h3 font-weight-bold'>投注總計</p>"
//   );
//   document.write("                          <div class='row'>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>投注金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>有效投注:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>輸/贏:</span><span class='text-theme2'>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>返水金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row py-2'>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>真人</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>體育</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>賓果</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>電子</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>棋牌</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write(
//     "                                        <span class='text-theme2'>100.00</span></span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>捕魚</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                        <div class='bettingHistoryPage2'>");
//   document.write(
//     "                          <div class='col-12 mb-3 CardBgMd_txt_BG'>"
//   );
//   document.write("");
//   document.write(
//     "                            <p class='border rounded p-3 mt-3'>"
//   );
//   document.write(
//     "                              <button type='button' class='btn bg-transparent bettingHistoryBtn p-0 pr-3'>"
//   );
//   document.write(
//     "                                <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                              </button>");
//   document.write(
//     "                              共計2筆投注，投注金額200.00 有效投注 100.00 <span class='text-theme2'>輸/贏"
//   );
//   document.write("                                200.00</span>");
//   document.write("                            </p>");
//   document.write("");
//   document.write(
//     "                            <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                              <table class='table table-striped'>"
//   );
//   document.write("                                <thead>");
//   document.write("                                  <tr class='text-center'>");
//   document.write(
//     "                                    <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>平台</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>投注金額</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>有效投注</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>輸/贏</th>"
//   );
//   document.write("                                  </tr>");
//   document.write("                                </thead>");
//   document.write("                                <tbody>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write("");
//   document.write("                                </tbody>");
//   document.write("                              </table>");
//   document.write("                              <!-- 頁碼 -->");
//   document.write("                              <div class='text-center p-2'>");
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                <style>");
//   document.write("                                  .btn-active:hover {");
//   document.write("                                    color: #365a97;");
//   document.write(
//     "                                    border-color: #365a97 !important;"
//   );
//   document.write("                                    font-size: 1.1rem;");
//   document.write("                                  }");
//   document.write("                                </style>");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </li>");
//   document.write("                    <li class=' ' id=''>");
//   document.write("                      <!-- MMC -->");
//   document.write("                      <div class='bettingHistoryParent4'>");
//   document.write("                        <div class='bettingHistoryPage1'>");
//   document.write(
//     "                          <p class='pb-3 h3 font-weight-bold'>投注總計</p>"
//   );
//   document.write("                          <div class='row'>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>投注金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>有效投注:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>輸/贏:</span><span class='text-theme2'>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>返水金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row py-2'>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>真人</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>體育</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>賓果</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>電子</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>棋牌</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write(
//     "                                        <span class='text-theme2'>100.00</span></span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>捕魚</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                        <div class='bettingHistoryPage2'>");
//   document.write(
//     "                          <div class='col-12 mb-3 CardBgMd_txt_BG'>"
//   );
//   document.write("");
//   document.write(
//     "                            <p class='border rounded p-3 mt-3'>"
//   );
//   document.write(
//     "                              <button type='button' class='btn bg-transparent bettingHistoryBtn p-0 pr-3'>"
//   );
//   document.write(
//     "                                <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                              </button>");
//   document.write(
//     "                              共計2筆投注，投注金額200.00 有效投注 100.00 <span class='text-theme2'>輸/贏"
//   );
//   document.write("                                200.00</span>");
//   document.write("                            </p>");
//   document.write("");
//   document.write(
//     "                            <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                              <table class='table table-striped'>"
//   );
//   document.write("                                <thead>");
//   document.write("                                  <tr class='text-center'>");
//   document.write(
//     "                                    <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>平台</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>投注金額</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>有效投注</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>輸/贏</th>"
//   );
//   document.write("                                  </tr>");
//   document.write("                                </thead>");
//   document.write("                                <tbody>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write("");
//   document.write("                                </tbody>");
//   document.write("                              </table>");
//   document.write("                              <!-- 頁碼 -->");
//   document.write("                              <div class='text-center p-2'>");
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                <style>");
//   document.write("                                  .btn-active:hover {");
//   document.write("                                    color: #365a97;");
//   document.write(
//     "                                    border-color: #365a97 !important;"
//   );
//   document.write("                                    font-size: 1.1rem;");
//   document.write("                                  }");
//   document.write("                                </style>");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </li>");
//   document.write("                  </ul>");
//   document.write("");
//   document.write("                </div>");
//   document.write("");
//   document.write("              </li>");
//   document.write("              <li class='text-center pl-3 w-100'>");
//   document.write("                <!-- 交易紀錄 插入 -->");
//   document.write("                <div class='col-12 my-0 CardBgMd_txt_BG'>");
//   document.write(
//     "                  <p class='pt-3 h3 font-weight-bold '>交易紀錄查詢</p>"
//   );
//   document.write("                  <div class='my-3'>");
//   document.write("");
//   document.write(
//     "                    <ul class='uk-subnav uk-subnav-pill row centerCenter p-3' uk-switcher=''>"
//   );
//   document.write(
//     "                      <li style='width: 25%;' class='uk-active'><a"
//   );
//   document.write(
//     "                          class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                          aria-expanded='true'>存款</a>");
//   document.write("                      </li>");
//   document.write("                      <li style='width: 25%;'><a");
//   document.write(
//     "                          class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                          aria-expanded='false'>提款</a>");
//   document.write("                      </li>");
//   document.write("                      <li style='width: 25%;'><a");
//   document.write(
//     "                          class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                          aria-expanded='false'>轉點</a>");
//   document.write("                      </li>");
//   document.write("                    </ul>");
//   document.write("");
//   document.write(
//     "                    <ul class='uk-switcher px-3 py-2 w3-round-medium' style='touch-action: pan-y pinch-zoom;'>"
//   );
//   document.write("                      <!-- 存款 -->");
//   document.write("                      <li class='uk-active'>");
//   document.write("");
//   document.write("                        <div class='CardBgMd_txt_BG my-3'>");
//   document.write("");
//   document.write(
//     "                          <ul class='uk-subnav uk-subnav-pill row centerCenter p-3' uk-switcher=''>"
//   );
//   document.write(
//     "                            <li style='width: 25%;' class='uk-active'><a"
//   );
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='true'>今日</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>昨日</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>本週</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>上週</a>"
//   );
//   document.write("                            </li>");
//   document.write("                          </ul>");
//   document.write("");
//   document.write(
//     "                          <form class='p-3 row centerCenter' action='uk-margin' method='post'>"
//   );
//   document.write(
//     "                            <input class='px-1 py-0 text-secondary col-5 pr-3 rounded border bg-transparent'"
//   );
//   document.write(
//     "                              type='datetime-local' name='' id=''>"
//   );
//   document.write(
//     "                            <div class='p-1 col flex-grow-1'>"
//   );
//   document.write("                              <button type='button'");
//   document.write(
//     "                                class='btn bg-theme3 px-4 py-1 rounded rounded-pill text-light text-secondary py-0 rounded'>查詢"
//   );
//   document.write("                              </button>");
//   document.write("                            </div>");
//   document.write("                          </form>");
//   document.write("");
//   document.write(
//     "                          <ul class='uk-switcher px-3 py-2 w3-round-medium' style='touch-action: pan-y pinch-zoom;'>"
//   );
//   document.write("                            <!-- 今日 -->");
//   document.write("");
//   document.write("                            <li class=' uk-active'>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("");
//   document.write("                          </ul>");
//   document.write("");
//   document.write("                        </div>");
//   document.write("");
//   document.write("                      </li>");
//   document.write("                      <li class=''>");
//   document.write("");
//   document.write("                        <div class='CardBgMd_txt_BG my-3'>");
//   document.write("");
//   document.write(
//     "                          <ul class='uk-subnav uk-subnav-pill row centerCenter p-3' uk-switcher=''>"
//   );
//   document.write(
//     "                            <li style='width: 25%;' class='uk-active'><a"
//   );
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='true'>今日</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>昨日</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>本週</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>上週</a>"
//   );
//   document.write("                            </li>");
//   document.write("                          </ul>");
//   document.write("");
//   document.write(
//     "                          <form class='p-3 row centerCenter' action='uk-margin' method='post'>"
//   );
//   document.write(
//     "                            <input class='px-1 py-0 text-secondary col-5 pr-3 rounded border bg-transparent'"
//   );
//   document.write(
//     "                              type='datetime-local' name='' id=''>"
//   );
//   document.write(
//     "                            <div class='p-1 col flex-grow-1'>"
//   );
//   document.write("                              <button type='button'");
//   document.write(
//     "                                class='btn bg-theme3 px-4 py-1 rounded rounded-pill text-light text-secondary py-0 rounded'>查詢"
//   );
//   document.write("                              </button>");
//   document.write("                            </div>");
//   document.write("                          </form>");
//   document.write("");
//   document.write(
//     "                          <ul class='uk-switcher px-3 py-2 w3-round-medium' style='touch-action: pan-y pinch-zoom;'>"
//   );
//   document.write("                            <!-- 今日 -->");
//   document.write("                            <li class='uk-active'>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                          </ul>");
//   document.write("");
//   document.write("                        </div>");
//   document.write("");
//   document.write("                      </li>");
//   document.write("                      <li class=''>");
//   document.write("");
//   document.write("                        <div class='CardBgMd_txt_BG my-3'>");
//   document.write("");
//   document.write(
//     "                          <ul class='uk-subnav uk-subnav-pill row centerCenter p-3' uk-switcher=''>"
//   );
//   document.write(
//     "                            <li style='width: 25%;' class='uk-active'><a"
//   );
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='true'>今日</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>昨日</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>本週</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>上週</a>"
//   );
//   document.write("                            </li>");
//   document.write("                          </ul>");
//   document.write("");
//   document.write(
//     "                          <form class='p-3 row centerCenter' action='uk-margin' method='post'>"
//   );
//   document.write(
//     "                            <input class='px-1 py-0 text-secondary col-5 pr-3 rounded border bg-transparent'"
//   );
//   document.write(
//     "                              type='datetime-local' name='' id=''>"
//   );
//   document.write(
//     "                            <div class='p-1 col flex-grow-1'>"
//   );
//   document.write("                              <button type='button'");
//   document.write(
//     "                                class='btn bg-theme3 px-4 py-1 rounded rounded-pill text-light text-secondary py-0 rounded'>查詢"
//   );
//   document.write("                              </button>");
//   document.write("                            </div>");
//   document.write("                          </form>");
//   document.write("");
//   document.write(
//     "                          <ul class='uk-switcher px-3 py-2 w3-round-medium' style='touch-action: pan-y pinch-zoom;'>"
//   );
//   document.write("                            <!-- 今日 -->");
//   document.write("                            <li class='uk-active'>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive'>"
//   );
//   document.write("");
//   document.write("                                  <table class='table '>");
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>類型</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>流水</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>時間</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>交易編號</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive'>"
//   );
//   document.write("");
//   document.write("                                  <table class='table '>");
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>類型</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>流水</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>時間</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>交易編號</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive'>"
//   );
//   document.write("");
//   document.write("                                  <table class='table '>");
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>類型</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>流水</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>時間</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>交易編號</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive'>"
//   );
//   document.write("");
//   document.write("                                  <table class='table '>");
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>類型</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>流水</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>時間</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>交易編號</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                          </ul>");
//   document.write("");
//   document.write("                        </div>");
//   document.write("");
//   document.write("                      </li>");
//   document.write("                    </ul>");
//   document.write("");
//   document.write("                  </div>");
//   document.write("");
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("");
//   document.write("              <li class='text-center pl-3 w-100'>");
//   document.write("                <!-- 帳戶管理 插入 -->");
//   document.write("                <div class='' id='AccountNanagement'>");
//   document.write("                  <div class='col-12 my-0 CardBgMd_txt_BG'>");
//   document.write("                    <p class='py-3 clearfix'>");
//   document.write(
//     "                      <span class='h3 font-weight-bold'>銀行帳戶</span>"
//   );
//   document.write(
//     "                      <span class='float-right'><span>1</span><span>/3</span></span>"
//   );
//   document.write("                    </p>");
//   document.write("                    <div class='row p-3'>");
//   document.write("                      <div class='col-4 px-3'>");
//   document.write("                        <div class='uk-inline'>");
//   document.write(
//     "                          <img src='../img/手機各分頁img/bankcard.png' alt='' class='img-fluid'>"
//   );
//   document.write("");
//   document.write(
//     "                          <div class='uk-overlay uk-overlay-default uk-position-center bg-transparent'>"
//   );
//   document.write("                            <div class='row'>");
//   document.write(
//     "                              <div class='col-12 text-right h5 font-weight-bold'>富邦銀行</div>"
//   );
//   document.write(
//     "                              <div class='col-12 text-left font-weight-bold'>XXXX - 1234</div>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-4 px-3'>");
//   document.write(
//     "                        <button class='p-0 btn bg-transparent' id='AccountNanagement1Btn'>"
//   );
//   document.write(
//     "                          <img src='../img/手機各分頁img/add_bankcard.png' alt='' class=''>"
//   );
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-4 px-3 d-none'>");
//   document.write(
//     "                        <button class='p-0 btn bg-transparent'>"
//   );
//   document.write(
//     "                          <img src='../img/手機各分頁img/add_bankcard.png' alt='' class=''>"
//   );
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("");
//   document.write("                  </div>");
//   document.write("                  <div class='col-12 my-2 CardBgMd_txt_BG'>");
//   document.write("                    <p class='py-3 clearfix'>");
//   document.write(
//     "                      <span class='h3 font-weight-bold'>信用卡</span>"
//   );
//   document.write(
//     "                      <span class='float-right'><span>1</span><span>/3</span></span>"
//   );
//   document.write("                    </p>");
//   document.write("                    <div class='row p-3'>");
//   document.write("                      <div class='col-4 px-3'>");
//   document.write("                        <div class='uk-inline'>");
//   document.write(
//     "                          <img src='../img/手機各分頁img/bankcard.png' alt='' class='img-fluid'>"
//   );
//   document.write("");
//   document.write(
//     "                          <div class='uk-overlay uk-overlay-default uk-position-center bg-transparent'>"
//   );
//   document.write("                            <div class='row'>");
//   document.write(
//     "                              <div class='col-12 text-right h5 font-weight-bold'>富邦銀行</div>"
//   );
//   document.write(
//     "                              <div class='col-12 text-left font-weight-bold'>XXXX - 1234</div>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-4 px-3'>");
//   document.write(
//     "                        <button class='p-0 btn bg-transparent' id='AccountNanagement2Btn'>"
//   );
//   document.write(
//     "                          <img src='../img/手機各分頁img/Frame 736.png' alt='' class=''>"
//   );
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-4 px-3 d-none'>");
//   document.write(
//     "                        <button class='p-0 btn bg-transparent'>"
//   );
//   document.write(
//     "                          <img src='../img/手機各分頁img/Frame 736.png' alt='' class=''>"
//   );
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("");
//   document.write("                  </div>");
//   document.write("                </div>");
//   document.write("                <div class='' id='AccountNanagement1'>");
//   document.write("                  <div class='col-12 my-2 CardBgMd_txt_BG'>");
//   document.write("                    <p class='p-3 mt-3'>");
//   document.write(
//     "                      <button type='button' class='btn bg-transparent  p-0 pr-3 AccountNanagementBtn'>"
//   );
//   document.write(
//     "                        <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                      </button>");
//   document.write(
//     "                      <span class='h3 font-weight-bold'>新增銀行帳戶</span>"
//   );
//   document.write("                    </p>");
//   document.write(
//     "                    <div class='col-12 bg-linear-theme py-3'>"
//   );
//   document.write("                      <div class='py-2'>");
//   document.write(
//     "                        <p class='font-weight-bold text-dark'>帳戶人姓名</p>"
//   );
//   document.write(
//     "                        <input type='text' class='btn-block bg-transparent border-bottom fsz09' placeholder='請輸入帳戶人姓名'>"
//   );
//   document.write(
//     "                        <p class='fsz-08 text-black-50'>為了您的資金能夠迅速到帳，請確保填寫的姓名與銀行卡的開戶姓名一致</p>"
//   );
//   document.write("                      </div>");
//   document.write("                      <div class='py-2'>");
//   document.write(
//     "                        <p class='font-weight-bold text-dark'>銀行代碼與名稱</p>"
//   );
//   document.write(
//     "                        <input type='text' class='btn-block bg-transparent border-bottom fsz09' placeholder='請選擇銀行'>"
//   );
//   document.write("                      </div>");
//   document.write("                      <div class='py-2'>");
//   document.write(
//     "                        <p class='font-weight-bold text-dark'>銀行帳號</p>"
//   );
//   document.write(
//     "                        <input type='text' class='btn-block bg-transparent border-bottom fsz09' placeholder='請輸入帳號'>"
//   );
//   document.write(
//     "                        <p class='fsz-08 text-black-50'>請認真檢查儀行帳號，帳號錯誤資金無法到帳</p>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <p class='font-weight-bold text-dark px-5 text-center'>信息在確認後將無法修改如需幫忙，請<a href='#'"
//   );
//   document.write(
//     "                          class='text-theme'> <button type='button'"
//   );
//   document.write(
//     "                            class='uk-button bg-transparent text-theme centerCenter px-0 py-1' data-toggle='modal'"
//   );
//   document.write(
//     "                            data-target='#exampleModalCenter2'>"
//   );
//   document.write("                            聯繫客服");
//   document.write("                          </button></a>");
//   document.write("                      </p>");
//   document.write("                      <div class='py-2'>");
//   document.write(
//     "                        <div class='btn btn-block bg-transparent border border-secondary py-5'>"
//   );
//   document.write(
//     "                          <p class='centerCenter text-black-50 font-weight-bold'>點擊此處上傳驗證資料</p>"
//   );
//   document.write(
//     "                          <p class='centerCenter text-black-50 font-weight-bold'>身分證+健保卡(或第二有效證件)+銀行存摺 合拍(示意圖)</p>"
//   );
//   document.write(
//     "                          <p class='centerCenter text-black-50 font-weight-bold'>*最多上傳40筆，上傳檔案大小請在5MB以下</p>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <input type='submit' value='上傳' class='btn-secondary mt-4 btn btn-block w-25 centerCenter'>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <p class='font-weight-bold text-dark'>範例:</p>"
//   );
//   document.write("                      <div class='row'>");
//   document.write("                        <div class='col-12'>");
//   document.write(
//     "                          <img class='img-fluid w-75' src='../img/桌機各分頁img/MyPurse/Group 140.jpg' alt=''>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='col-12'>");
//   document.write("                          <input type='submit' value='完成'");
//   document.write(
//     "                            class='bg-theme3 pr-3 font-weight-bold text-light mt-3 btn rounded rounded-pill px-4 centerCenter'>"
//   );
//   document.write("                          <input type='submit' value='取消'");
//   document.write(
//     "                            class='font-weight-bold text-dark border mt-3 btn rounded rounded-pill px-4 centerCenter'"
//   );
//   document.write(
//     "                            style='background-color: #fff;'>"
//   );
//   document.write(
//     "                          <p class='font-weight-bold text-dark px-5 text-center'>如需幫助，請<a href='#' class='text-theme'>"
//   );
//   document.write(
//     "                              <button type='button' class='uk-button bg-transparent text-theme centerCenter px-0 py-1'"
//   );
//   document.write(
//     "                                data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                                聯繫客服");
//   document.write("                              </button></a>");
//   document.write("                          </p>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("                </div>");
//   document.write("                <div class='' id='AccountNanagement2'>");
//   document.write("                  <div class='col-12 my-2 CardBgMd_txt_BG'>");
//   document.write("                    <p class='p-3 mt-3'>");
//   document.write(
//     "                      <button type='button' class='btn bg-transparent  p-0 pr-3 AccountNanagementBtn'>"
//   );
//   document.write(
//     "                        <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                      </button>");
//   document.write(
//     "                      <span class='h3 font-weight-bold'>新增信用卡</span>"
//   );
//   document.write("                    </p>");
//   document.write("                    <div class='py-2'>");
//   document.write(
//     "                      <p class='font-weight-bold text-dark'>持卡人姓名</p>"
//   );
//   document.write(
//     "                      <input type='text' class='btn-block bg-transparent border-bottom fsz09' placeholder='請輸入帳戶人姓名'>"
//   );
//   document.write(
//     "                      <p class='fsz-08 text-black-50'>為了您的資金能夠迅速到帳，請確保填寫的姓名與銀行卡的開戶姓名一致</p>"
//   );
//   document.write("                    </div>");
//   document.write("                    <div class='py-2'>");
//   document.write(
//     "                      <p class='font-weight-bold text-dark'>信用卡卡號</p>"
//   );
//   document.write(
//     "                      <input type='text' class='btn-block bg-transparent border-bottom fsz09' placeholder='請輸入卡號'>"
//   );
//   document.write("                    </div>");
//   document.write("");
//   document.write("                    <div class='py-2'>");
//   document.write(
//     "                      <div class='btn btn-block bg-transparent border border-secondary py-5'>"
//   );
//   document.write(
//     "                        <p class='centerCenter text-black-50 font-weight-bold'>點擊此處上傳驗證資料</p>"
//   );
//   document.write(
//     "                        <p class='centerCenter text-black-50 font-weight-bold'>身分證+健保卡(或第二有效證件)+銀行存摺 合拍(示意圖)</p>"
//   );
//   document.write(
//     "                        <p class='centerCenter text-black-50 font-weight-bold'>*最多上傳40筆，上傳檔案大小請在5MB以下</p>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <input type='submit' value='上傳' class='btn-secondary mt-4 btn btn-block w-25 centerCenter'>"
//   );
//   document.write("                    </div>");
//   document.write(
//     "                    <p class='font-weight-bold text-dark'>範例:</p>"
//   );
//   document.write("                    <div class='row'>");
//   document.write("                      <div class='col-12'>");
//   document.write(
//     "                        <img class='img-fluid' src='../img/桌機各分頁img/MyPurse/Group 139.jpg' alt=''>"
//   );
//   document.write("                      </div>");
//   document.write("                      <div class='col-12'>");
//   document.write(
//     "                        <img src='../img/手機各分頁img/Frame749.png' alt='' class='w-25 img-fluid pt-2'>"
//   );
//   document.write("                      </div>");
//   document.write("                      <div class='col-12'>");
//   document.write("                        <input type='submit' value='完成'");
//   document.write(
//     "                          class='bg-theme3 pr-3 font-weight-bold text-light mt-3 btn rounded rounded-pill px-4 centerCenter'>"
//   );
//   document.write("                        <input type='submit' value='取消'");
//   document.write(
//     "                          class='font-weight-bold text-dark border mt-3 btn rounded rounded-pill px-4 centerCenter'"
//   );
//   document.write("                          style='background-color: #fff;'>");
//   document.write(
//     "                        <p class='font-weight-bold text-dark px-5 text-center'>如需幫助，請<a href='#' class='text-theme'>"
//   );
//   document.write(
//     "                            <button type='button' class='uk-button bg-transparent text-theme centerCenter px-0 py-1'"
//   );
//   document.write(
//     "                              data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                              聯繫客服");
//   document.write("                            </button></a>");
//   document.write("                        </p>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("");
//   document.write("              <li class='text-center pl-4 w-100'>");
//   document.write("                <!-- 個人資料 插入 -->");
//   document.write("                <div class='row CardBgMd_txt_BG mb-3'>");
//   document.write(
//     "                  <p class='col-12 py-3 h3 font-weight-bold border-bottom'>基本資料</p>"
//   );
//   document.write("                  <div class='col-12 py-3'>");
//   document.write(
//     "                    <span class='font-weight-bold pr-3'>用戶名:</span><span>0987123654</span>"
//   );
//   document.write("                  </div>");
//   document.write("                  <div class='col-12 py-3'>");
//   document.write(
//     "                    <span class='font-weight-bold pr-3'>真實姓名:</span><span class='pr-3'>秋香</span><span"
//   );
//   document.write(
//     "                      class='text-secondary'>姓名需與銀行帳戶人姓名一致，否則無法提款，如需更改請 <button type='button'"
//   );
//   document.write(
//     "                        class='uk-button bg-transparent text-theme centerCenter px-0 py-1' data-toggle='modal'"
//   );
//   document.write("                        data-target='#exampleModalCenter2'>");
//   document.write(
//     "                        <button type='button' class='uk-button bg-transparent text-theme centerCenter px-0 py-1'"
//   );
//   document.write(
//     "                          data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                          聯繫客服");
//   document.write("                        </button>");
//   document.write("                      </button></span>");
//   document.write("                  </div>");
//   document.write("                  <div class='col-12 py-3'>");
//   document.write(
//     "                    <span class='font-weight-bold pr-3'>性別:</span><span>男</span>"
//   );
//   document.write("                  </div>");
//   document.write("                  <div class='col-12 py-3'>");
//   document.write(
//     "                    <span class='font-weight-bold pr-3'>VIP特權:</span><span>VIP1</span>"
//   );
//   document.write("                  </div>");
//   document.write("                  <div class='col-12 py-3'>");
//   document.write(
//     "                    <span class='font-weight-bold pr-3'>LINE ID:</span><input class='form-control w-25 d-inline'"
//   );
//   document.write(
//     "                      type='text' placeholder='請輸入 LINE ID'>"
//   );
//   document.write("                  </div>");
//   document.write("                </div>");
//   document.write("                <div class='row CardBgMd_txt_BG'>");
//   document.write(
//     "                  <p class='col-12 py-3 h3 font-weight-bold border-bottom'>帳號安全</p>"
//   );
//   document.write("                  <div class='col-12 py-3'>");
//   document.write("                    <div class='row py-2'>");
//   document.write("                      <div class='col-6'>");
//   document.write(
//     "                        <span class='font-weight-bold pr-3'>手機號碼:</span><span>0987****88</span>"
//   );
//   document.write("                      </div>");
//   document.write("                      <div class='col-6'>");
//   document.write(
//     "                        <span class='font-weight-bold pr-3'>已驗證</span>"
//   );
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write(
//     "                    <div class='row py-2' id='changePassword_hide'>"
//   );
//   document.write("                      <div class='col-6'>");
//   document.write("");
//   document.write(
//     "                        <span class='font-weight-bold pr-3'>更改密碼:</span><span>**********</span>"
//   );
//   document.write("                      </div>");
//   document.write("                      <div class='col-6'>");
//   document.write(
//     "                        <button class='btn bd-theme text-theme rounded-pill py-1 px-5' id='changePassword'>編輯</button>"
//   );
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write(
//     "                    <div class='row m-0 py-2' id='changePassword_show'>"
//   );
//   document.write("                      <div class='col-12 m-0 p-0 py-2'>");
//   document.write("                        <div class='row m-0 p-0'>");
//   document.write(
//     "                          <span class='font-weight-bold pr-3'>舊密碼:</span>"
//   );
//   document.write(
//     "                          <input type='text' class='bg-transparent border-bottom fsz09' placeholder='請輸入原密碼'>"
//   );
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-12 m-0 p-0 py-2'>");
//   document.write("                        <div class='row m-0 p-0'>");
//   document.write(
//     "                          <span class='font-weight-bold pr-3'>新密碼:</span>"
//   );
//   document.write(
//     "                          <input type='text' class='bg-transparent border-bottom fsz09' placeholder='請輸入新密碼'>"
//   );
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-12 m-0 p-0 py-2'>");
//   document.write("                        <div class='row m-0 p-0'>");
//   document.write(
//     "                          <span class='font-weight-bold pr-3'>確認密碼:</span>"
//   );
//   document.write(
//     "                          <input type='text' class='bg-transparent border-bottom fsz09' placeholder='確認密碼'>"
//   );
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write(
//     "                      <button class='btn bd-theme text-theme rounded-pill py-1 px-5'>完成</button>"
//   );
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("              <li class='text-center pl-3 w-100'>");
//   document.write("                <!-- VIP特權 插入 -->");
//   document.write("                <div class='pl-3' id='vip'>");
//   document.write(
//     "                  <div class='row CardBgMd_txt_BG mb-3 px-3'>"
//   );
//   document.write("                    <div class='col-12 pb-3'>");
//   document.write("                      <div class='row pb-3'>");
//   document.write("                        <div class='col-2 text-center'>");
//   document.write(
//     "                          <img class='img-fluid' src='../img/桌機各分頁img/MyPurse/Group 212.png' alt=''>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='flex-grow-1 py-3'>");
//   document.write(
//     "                          <p class='font-weight-bold fsz-12 pt-3'>當前等級:VIP1</p>"
//   );
//   document.write(
//     "                          <p>保級流水(自2022-03-15)： $0.00</p>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='col-3 col-md-2 py-3'>");
//   document.write(
//     "                          <button type='button' class='btn bg-transparent' id='vipBtn'>"
//   );
//   document.write("                            VIP詳情");
//   document.write(
//     "                            <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                          </button>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-12'>");
//   document.write("                        <div class='row'>");
//   document.write(
//     "                          <div class='col text-center'>VIP0</div>"
//   );
//   document.write(
//     "                          <div class='col text-center'>VIP1</div>"
//   );
//   document.write(
//     "                          <div class='col text-center'>VIP2</div>"
//   );
//   document.write(
//     "                          <div class='col text-center'>VIP3</div>"
//   );
//   document.write(
//     "                          <div class='col text-center'>VIP4</div>"
//   );
//   document.write(
//     "                          <div class='col text-center'>VIP5</div>"
//   );
//   document.write(
//     "                          <div class='col text-center'>VIP6</div>"
//   );
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-12 py-3'>");
//   document.write("                        <div class='row py-3'>");
//   document.write(
//     "                          <div class='progress rounded-pill col-12 p-0'>"
//   );
//   document.write(
//     "                            <div class='progress-bar bg-theme3' role='progressbar' style='width: 25%;'"
//   );
//   document.write(
//     "                              aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'></div>"
//   );
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write(
//     "                      <div class='col-12 py-3 bg-theme rounded'>"
//   );
//   document.write("                        <div class='row'>");
//   document.write(
//     "                          <p class='col-12 font-weight-bold fsz-12'>距離下一等級：VIP2</p>"
//   );
//   document.write("                          <div class='col-12'>");
//   document.write(
//     "                            <div class='row centerCenter py-2'>"
//   );
//   document.write(
//     "                              <div class='col-1 text-center'>存款"
//   );
//   document.write("                              </div>");
//   document.write("                              <div class='flex-grow-1'>");
//   document.write(
//     "                                <div class='progress rounded-pill col-12 p-0'>"
//   );
//   document.write(
//     "                                  <div class='progress-bar bg-theme5' role='progressbar' style='width: 25%;'"
//   );
//   document.write(
//     "                                    aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>"
//   );
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                              </div>");
//   document.write("                              <div class='col-3 col-md-2'>");
//   document.write("                                還需存款約 6,000");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='row centerCenter py-2'>"
//   );
//   document.write(
//     "                              <div class='col-1 text-center'>流水"
//   );
//   document.write("                              </div>");
//   document.write("                              <div class='flex-grow-1'>");
//   document.write(
//     "                                <div class='progress rounded-pill col-12 p-0'>"
//   );
//   document.write(
//     "                                  <div class='progress-bar bg-theme5' role='progressbar' style='width: 25%;'"
//   );
//   document.write(
//     "                                    aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>"
//   );
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                              </div>");
//   document.write("                              <div class='col-3 col-md-2'>");
//   document.write("                                還需流水約 59,330");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("");
//   document.write(
//     "                  <div class='row CardBgMd_txt_BG mb-3 px-5 py-3'>"
//   );
//   document.write(
//     "                    <p class='col-12 font-weight-bold fsz-12'>VIP1尊享</p>"
//   );
//   document.write("                    <!-- <div class='row px-5'>");
//   document.write(
//     "                                <div class='col-3 py-2 text-left'>"
//   );
//   document.write(
//     "                                  <img class='img-fluid' src='../img/桌機各分頁img/MyPurse/Group 8741.png' alt=''>"
//   );
//   document.write(
//     "                                  <p class='font-weight-bold text-theme'>1</p>"
//   );
//   document.write(
//     "                                  <p class='font-weight-bold text-secondary'>每日提款次數</p>"
//   );
//   document.write("                                </div>");
//   document.write("                                <div class='col-3  py-2'>");
//   document.write(
//     "                                  <p class='font-weight-bold text-theme'>0.3</p>"
//   );
//   document.write(
//     "                                  <p class='font-weight-bold text-secondary'>體育返水</p>"
//   );
//   document.write("                                </div>");
//   document.write("                                <div class='col-3  py-2'>");
//   document.write(
//     "                                  <p class='font-weight-bold text-theme'>0.3</p>"
//   );
//   document.write(
//     "                                  <p class='font-weight-bold text-secondary'>體育返水</p>"
//   );
//   document.write("                                </div>");
//   document.write("                                <div class='col-3  py-2'>");
//   document.write(
//     "                                  <p class='font-weight-bold text-theme'>0.3</p>"
//   );
//   document.write(
//     "                                  <p class='font-weight-bold text-secondary'>體育返水</p>"
//   );
//   document.write("                                </div>");
//   document.write("                              </div> -->");
//   document.write("                    <div class='col-12 px-3 d-flex'>");
//   document.write("                      <div class='text-center p-3'>");
//   document.write(
//     "                        <img class='img-fluid' src='../img/桌機各分頁img/MyPurse/Group 8741.png' alt=''>"
//   );
//   document.write(
//     "                        <p class='font-weight-bold text-theme text-center pt-2'>1</p>"
//   );
//   document.write(
//     "                        <p class='text-secondary text-center'>每日提款次數</p>"
//   );
//   document.write("                      </div>");
//   document.write("                      <div class='text-center p-3'>");
//   document.write(
//     "                        <img class='img-fluid' src='../img/桌機各分頁img/MyPurse/Group 8743.png' alt=''>"
//   );
//   document.write(
//     "                        <p class='font-weight-bold text-theme text-center pt-2'>0.00</p>"
//   );
//   document.write(
//     "                        <p class='text-secondary text-center'>生日禮金</p>"
//   );
//   document.write(
//     "                        <button type='button' class='btn btn-block bg-secondary text-light text-secondary py-0 rounded'"
//   );
//   document.write("                          disabled>領取");
//   document.write("                      </div>");
//   document.write("                      <div class='text-center p-3'>");
//   document.write(
//     "                        <img class='img-fluid' src='../img/桌機各分頁img/MyPurse/Group 8744.png' alt=''>"
//   );
//   document.write(
//     "                        <p class='font-weight-bold text-theme text-center pt-2'>0.00</p>"
//   );
//   document.write(
//     "                        <p class='text-secondary text-center'>升級禮金</p>"
//   );
//   document.write(
//     "                        <button type='button' class='btn btn-block bg-secondary text-light text-secondary py-0 rounded'"
//   );
//   document.write("                          disabled>領取");
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("");
//   document.write(
//     "                  <div class='row CardBgMd_txt_BG mb-3 px-5'>"
//   );
//   document.write("                    <div class='col-12 py-3 px-3'>");
//   document.write(
//     "                      <p class='col-12 font-weight-bold fsz-12'>VIP1優惠</p>"
//   );
//   document.write("                      <div class='row px-5'>");
//   document.write("                        <div class='col-3  py-2'>");
//   document.write(
//     "                          <p class='font-weight-bold text-theme'>0.3</p>"
//   );
//   document.write(
//     "                          <p class='font-weight-bold text-secondary'>真人返水</p>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='col-3  py-2'>");
//   document.write(
//     "                          <p class='font-weight-bold text-theme'>0.3</p>"
//   );
//   document.write(
//     "                          <p class='font-weight-bold text-secondary'>體育返水</p>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='col-3  py-2'>");
//   document.write(
//     "                          <p class='font-weight-bold text-theme'>0.3</p>"
//   );
//   document.write(
//     "                          <p class='font-weight-bold text-secondary'>體育返水</p>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='col-3  py-2'>");
//   document.write(
//     "                          <p class='font-weight-bold text-theme'>0.3</p>"
//   );
//   document.write(
//     "                          <p class='font-weight-bold text-secondary'>體育返水</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("                </div>");
//   document.write("                <div class='' id='vipPage'>");
//   document.write("                  <div class='col-12 my-2 CardBgMd_txt_BG'>");
//   document.write(
//     "                    <button type='button' class='btn bg-transparent' id='vipBtn2'>"
//   );
//   document.write(
//     "                      <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                      <span class='pt-3'>VIP詳情</span>");
//   document.write("                    </button>");
//   document.write("");
//   document.write("                    <!-- MOD -->");
//   document.write("                    <div class='container-wrap'>");
//   document.write("");
//   document.write(
//     "                      <section class='section5 wow fadeInUp py-3'>"
//   );
//   document.write("                        <div class='section5-wrap'>");
//   document.write("                          <div class='swiper swiper1'>");
//   document.write(
//     "                            <div class='swiper-wrap swiper-wrapper'>"
//   );
//   document.write(
//     "                              <div class='img-wrap swiper-slide'>"
//   );
//   document.write(
//     "                                <img src='../img/手機各分頁img/v1.png' alt=''>"
//   );
//   document.write("                              </div>");
//   document.write(
//     "                              <div class='img-wrap swiper-slide'>"
//   );
//   document.write(
//     "                                <img src='../img/手機各分頁img/v2.png' alt=''>"
//   );
//   document.write("                              </div>");
//   document.write(
//     "                              <div class='img-wrap swiper-slide'>"
//   );
//   document.write(
//     "                                <img src='../img/手機各分頁img/v3.png' alt=''>"
//   );
//   document.write("                              </div>");
//   document.write(
//     "                              <div class='img-wrap swiper-slide'>"
//   );
//   document.write(
//     "                                <img src='../img/手機各分頁img/v4.png' alt=''>"
//   );
//   document.write("                              </div>");
//   document.write(
//     "                              <div class='img-wrap swiper-slide'>"
//   );
//   document.write(
//     "                                <img src='../img/手機各分頁img/v5.png' alt=''>"
//   );
//   document.write("                              </div>");
//   document.write(
//     "                              <div class='img-wrap swiper-slide'>"
//   );
//   document.write(
//     "                                <img src='../img/手機各分頁img/v6.png' alt=''>"
//   );
//   document.write("                              </div>");
//   document.write(
//     "                              <!-- <div class='img-wrap swiper-slide'>"
//   );
//   document.write(
//     "                  <a href='https://mkpcard.taishinbank.com.tw/tscccms/promotion/detail/WM_20220307111256664'><img"
//   );
//   document.write(
//     "                      src='./assets/section5/section5-img4.png' alt=''>"
//   );
//   document.write("                  </a>");
//   document.write("                  <p>ZALORA刷台新最高享17%</p>");
//   document.write("                </div> -->");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='swiper-pagination'></div>"
//   );
//   document.write("                          </div>");
//   document.write(
//     "                          <!-- <div class='swiper-next' onclick='next()'>"
//   );
//   document.write(
//     "          <img src='./assets/section5/section5-arrow.svg' alt=''>"
//   );
//   document.write("        </div>");
//   document.write("        <div class='swiper-prev' onclick='prev()'>");
//   document.write(
//     "          <img src='./assets/section5/section5-arrow.svg' alt=''>"
//   );
//   document.write("        </div> -->");
//   document.write("                        </div>");
//   document.write("                      </section>");
//   document.write("");
//   document.write("                    </div>");
//   document.write(
//     "                    <script src='https://unpkg.com/swiper@8/swiper-bundle.min.js'></script>"
//   );
//   document.write("                    <script>");
//   document.write(
//     "                      const swiper = new Swiper('.swiper1', {"
//   );
//   document.write("                        // Optional parameters");
//   document.write("                        loop: true,");
//   document.write("                        slidesPerView: 3,");
//   document.write("                        centeredSlides: true,");
//   document.write("                        navigation: {");
//   document.write("                          nextEl: '.swiper-button-next',");
//   document.write("                          prevEl: '.swiper-button-prev',");
//   document.write("                        },");
//   document.write("                        pagination: {");
//   document.write("                          el: '.swiper-pagination',");
//   document.write("                          type: 'bullets',");
//   document.write("                        },");
//   document.write("                        // grabCursor: true,");
//   document.write("                      });");
//   document.write(
//     "                      const swiper2 = new Swiper('.swiper2', {"
//   );
//   document.write("                        slidesPerView: 2,");
//   document.write("                        centeredSlides: true,");
//   document.write("                        pagination: {");
//   document.write("                          el: '.swiper-pagination',");
//   document.write("                          type: 'bullets',");
//   document.write("                        },");
//   document.write("                      });");
//   document.write("");
//   document.write("                      function next() {");
//   document.write("                        swiper.slideNext(200, () => { });");
//   document.write("                      }");
//   document.write("");
//   document.write("                      function prev() {");
//   document.write("                        swiper.slidePrev(200, () => { });");
//   document.write("                      }");
//   document.write("                    </script>");
//   document.write("");
//   document.write("                    <div class='table-responsive-sm'>");
//   document.write("");
//   document.write("                      <table class='table table-striped'>");
//   document.write("                        <thead>");
//   document.write("                          <tr class='text-center'>");
//   document.write("                            <th scope='col'>VIP等級</th>");
//   document.write(
//     "                            <th scope='col'>週有效投注額</th>"
//   );
//   document.write("                            <th scope='col'>真人返水</th>");
//   document.write("                            <th scope='col'>電子返水</th>");
//   document.write("                            <th scope='col'>賓果返水</th>");
//   document.write("                            <th scope='col'>體育返水</th>");
//   document.write("                            <th scope='col'>晉級禮金</th>");
//   document.write("                          </tr>");
//   document.write("                        </thead>");
//   document.write("                        <tbody>");
//   document.write("                          <tr class='text-center'>");
//   document.write("                            <th>");
//   document.write(
//     "                              <img class='w-50' src='../img/手機index_img/V1.png' alt=''>"
//   );
//   document.write("                            </th>");
//   document.write("                            <td>50萬以內</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                            <td>X</td>");
//   document.write("                          </tr>");
//   document.write("                          <tr class='text-center'>");
//   document.write("                            <th>");
//   document.write(
//     "                              <img class='w-50' src='../img/手機index_img/V2.png' alt=''>"
//   );
//   document.write("                            </th>");
//   document.write("                            <td>50-200萬</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                            <td>0.1%</td>");
//   document.write("                            <td>588</td>");
//   document.write("                          </tr>");
//   document.write("                          <tr class='text-center'>");
//   document.write("                            <th>");
//   document.write(
//     "                              <img class='w-50' src='../img/手機index_img/V3.png' alt=''>"
//   );
//   document.write("                            </th>");
//   document.write("                            <td>200-1000萬</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                            <td>0.1%</td>");
//   document.write("                            <td>1288</td>");
//   document.write("                          </tr>");
//   document.write("                          <tr class='text-center'>");
//   document.write("                            <th>");
//   document.write(
//     "                              <img class='w-50' src='../img/手機index_img/V4.png' alt=''>"
//   );
//   document.write("                            </th>");
//   document.write("                            <td>1000-4000萬</td>");
//   document.write("                            <td>0.4%</td>");
//   document.write("                            <td>0.4%</td>");
//   document.write("                            <td>0.4%</td>");
//   document.write("                            <td>0.1%</td>");
//   document.write("                            <td>2888</td>");
//   document.write("                          </tr>");
//   document.write("                          <tr class='text-center'>");
//   document.write("                            <th>");
//   document.write(
//     "                              <img class='w-50' src='../img/手機index_img/V5.png' alt=''>"
//   );
//   document.write("                            </th>");
//   document.write("                            <td>4000-1億</td>");
//   document.write("                            <td>0.4%</td>");
//   document.write("                            <td>0.5%</td>");
//   document.write("                            <td>0.4%</td>");
//   document.write("                            <td>0.2%</td>");
//   document.write("                            <td>4888</td>");
//   document.write("                          </tr>");
//   document.write("                          <tr class='text-center'>");
//   document.write("                            <th>");
//   document.write(
//     "                              <img class='w-50' src='../img/手機index_img/V6.png' alt=''>"
//   );
//   document.write("                            </th>");
//   document.write("                            <td>1億以上</td>");
//   document.write("                            <td>0.5%</td>");
//   document.write("                            <td>0.6%</td>");
//   document.write("                            <td>0.5%</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                            <td>8888</td>");
//   document.write("                          </tr>");
//   document.write("");
//   document.write("                        </tbody>");
//   document.write("                      </table>");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("                  <div class='col-12 my-2 CardBgMd_txt_BG'>");
//   document.write(
//     "                    <p class='py-3 h3 font-weight-bold border-bottom'>提款規則</p>"
//   );
//   document.write("                    <div class='table-responsive'>");
//   document.write("                      <table class='table table-striped'>");
//   document.write("                        <thead>");
//   document.write("                          <tr class='text-center'>");
//   document.write(
//     "                            <th scope='col'>VIP每日免手續提款次數</th>"
//   );
//   document.write(
//     "                            <th scope='col'>每日提款額度</th>"
//   );
//   document.write("                            <th scope='col'>棋牌返水</th>");
//   document.write("                            <th scope='col'>捕魚返水</th>");
//   document.write("                          </tr>");
//   document.write("                        </thead>");
//   document.write("                        <tbody>");
//   document.write("                          <tr class='text-center'>");
//   document.write("                            <td>1</td>");
//   document.write("                            <td>無上限</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                            <td>0.3%</td>");
//   document.write("                          </tr>");
//   document.write("                        </tbody>");
//   document.write("                      </table>");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("");
//   document.write("                  <div class='col-12 my-2 CardBgMd_txt_BG'>");
//   document.write(
//     "                    <p class='py-3 h3 font-weight-bold'>活動規則</p>"
//   );
//   document.write("                    <div class='w-100 d-flex px-3 py-2'>");
//   document.write(
//     "                      <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>1</div>"
//   );
//   document.write(
//     "                      <p class='col'>晉級獎金統計周期為：每周一00:00至周日23:59，並於隔周一由系統統計派發</p>"
//   );
//   document.write("                    </div>");
//   document.write("                    <div class='w-100 d-flex px-3 py-2'>");
//   document.write(
//     "                      <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>2</div>"
//   );
//   document.write(
//     "                      <p class='col'>每周一系統將會自動統計玩家有效投註額及星級情況，晉級獎金將於18:00前添加到賬，晉級獎金可隨時申請提款，也可以選擇繼續投注遊戲"
//   );
//   document.write("                      </p>");
//   document.write("                    </div>");
//   document.write("                    <div class='w-100 d-flex px-3 py-2'>");
//   document.write(
//     "                      <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>3</div>"
//   );
//   document.write(
//     "                      <p class='col'>若是當周已達成條件，下周流水須達到一半的條件方能保級，如果未達成一半流水條件，將會下降一星級，例如:"
//   );
//   document.write(
//     "                        A會員在這周單廳流水300萬，可晉升成3星會員，則下周須達成單廳流水100萬，方可維持3星級，若低於100萬，將會掉至2星級....依此類推"
//   );
//   document.write("                      </p>");
//   document.write("                    </div>");
//   document.write("                    <div class='w-100 d-flex px-3 py-2'>");
//   document.write(
//     "                      <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>4</div>"
//   );
//   document.write("                      <p class='col'>");
//   document.write(
//     "                        同一會員同一周只能享受一次晉級獎金，如客戶最高升級6星級，可享受6星級對應獎金，不能同時享受5星級對應獎金，且同一星級的獎金無法重複領取。"
//   );
//   document.write("                      </p>");
//   document.write("                    </div>");
//   document.write("                    <div class='w-100 d-flex px-3 py-2'>");
//   document.write(
//     "                      <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>5</div>"
//   );
//   document.write(
//     "                      <p class='col'>若是當周已達成條件，下周流水須達到一半的條件方能保級，如果未達成一半流水條件，將會下降一星級，例如:"
//   );
//   document.write(
//     "                        A會員在這周單廳流水300萬，可晉升成3星會員，則下周須達成單廳流水100萬，方可維持3星級，若低於100萬，將會掉至2星級....依此類推"
//   );
//   document.write("                      </p>");
//   document.write("                    </div>");
//   document.write("                    <div class='w-100 d-flex px-3 py-2'>");
//   document.write(
//     "                      <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>6</div>"
//   );
//   document.write("                      <p class='col'>");
//   document.write(
//     "                        同一會員同一周只能享受一次晉級獎金，如客戶最高升級6星級，可享受6星級對應獎金，不能同時享受5星級對應獎金，且同一星級的獎金無法重複領取。"
//   );
//   document.write("                      </p>");
//   document.write("                    </div>");
//   document.write("");
//   document.write("                  </div>");
//   document.write("");
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("              <li class='text-center pl-3 w-100'>");
//   document.write("                <!-- 優惠達標查詢 插入 -->");
//   document.write("                <div class='col-12 my-0 CardBgMd_txt_BG'>");
//   document.write(
//     "                  <p class='py-3 h3 font-weight-bold'>優惠達標查詢</p>"
//   );
//   document.write(
//     "                  <p class='py-3 h5 font-weight-bold'>未完成流水:2,000.00</p>"
//   );
//   document.write("                  <div class='table-responsive'>");
//   document.write("");
//   document.write("                    <table class='table '>");
//   document.write("                      <thead>");
//   document.write("                        <tr class='text-center'>");
//   document.write("                          <th scope='col'>類型</th>");
//   document.write("                          <th scope='col'>金額</th>");
//   document.write("                          <th scope='col'>流水</th>");
//   document.write("                          <th scope='col'>時間</th>");
//   document.write("                          <th scope='col'>交易編號</th>");
//   document.write("                        </tr>");
//   document.write("                      </thead>");
//   document.write("                      <tbody>");
//   document.write(
//     "                        <tr class='text-center text-secondary'>"
//   );
//   document.write("                          <th>");
//   document.write("                            儲值");
//   document.write("                          </th>");
//   document.write("                          <td>1000.00</td>");
//   document.write("                          <td>1000.00</td>");
//   document.write("                          <td>2022-03-30 15:20:51</td>");
//   document.write("                          <td>DC2220646HC5</td>");
//   document.write("                        </tr>");
//   document.write(
//     "                        <tr class='text-center text-secondary'>"
//   );
//   document.write("                          <th>");
//   document.write("                            優惠");
//   document.write("                          </th>");
//   document.write("                          <td>1600.00</td>");
//   document.write("                          <td>xxx</td>");
//   document.write("                          <td>2022-03-30 15:20:51</td>");
//   document.write("                          <td>DC2220646HC5</td>");
//   document.write("                        </tr>");
//   document.write(
//     "                        <tr class='text-center text-secondary'>"
//   );
//   document.write("                          <th>");
//   document.write("                            儲值");
//   document.write("                          </th>");
//   document.write("                          <td>1000.00</td>");
//   document.write("                          <td>1000.00</td>");
//   document.write("                          <td>2022-03-30 15:20:51</td>");
//   document.write("                          <td>DC2220646HC5</td>");
//   document.write("                        </tr>");
//   document.write(
//     "                        <tr class='text-center text-secondary'>"
//   );
//   document.write("                          <th>");
//   document.write("                            優惠");
//   document.write("                          </th>");
//   document.write("                          <td>1600.00</td>");
//   document.write("                          <td>xxx</td>");
//   document.write("                          <td>2022-03-30 15:20:51</td>");
//   document.write("                          <td>DC2220646HC5</td>");
//   document.write("                        </tr>");
//   document.write(
//     "                        <tr class='text-center text-secondary'>"
//   );
//   document.write("                          <th>");
//   document.write("                            儲值");
//   document.write("                          </th>");
//   document.write("                          <td>1000.00</td>");
//   document.write("                          <td>1000.00</td>");
//   document.write("                          <td>2022-03-30 15:20:51</td>");
//   document.write("                          <td>DC2220646HC5</td>");
//   document.write("                        </tr>");
//   document.write(
//     "                        <tr class='text-center text-secondary'>"
//   );
//   document.write("                          <th>");
//   document.write("                            優惠");
//   document.write("                          </th>");
//   document.write("                          <td>1600.00</td>");
//   document.write("                          <td>xxx</td>");
//   document.write("                          <td>2022-03-30 15:20:51</td>");
//   document.write("                          <td>DC2220646HC5</td>");
//   document.write("                        </tr>");
//   document.write("");
//   document.write("                      </tbody>");
//   document.write("                    </table>");
//   document.write("                  </div>");
//   document.write("");
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("              <li class='text-center pl-3 w-100'>");
//   document.write("                <!-- 投注紀錄 插入 -->");
//   document.write("                <div class='col-12 my-0 CardBgMd_txt_BG'>");
//   document.write(
//     "                  <p class='py-3 h3 font-weight-bold'>投注紀錄日期查詢</p>"
//   );
//   document.write(
//     "                  <form class='p-3 row' action='uk-margin' method='post'>"
//   );
//   document.write(
//     "                    <input class='px-1 py-0 text-secondary col-5 pr-3 rounded border bg-transparent'"
//   );
//   document.write("                      type='datetime-local' name='' id=''>");
//   document.write("                    <div class='p-1 col flex-grow-1'>");
//   document.write("                      <button type='button'");
//   document.write(
//     "                        class='btn bg-theme3 px-4 py-1 rounded rounded-pill text-light text-secondary py-0 rounded'>查詢"
//   );
//   document.write("                      </button>");
//   document.write("                    </div>");
//   document.write("                  </form>");
//   document.write("");
//   document.write("                </div>");
//   document.write("                <div class='CardBgMd_txt_BG my-3 '>");
//   document.write("");
//   document.write(
//     "                  <ul class='uk-subnav uk-subnav-pill  row centerCenter p-3' uk-switcher=''>"
//   );
//   document.write(
//     "                    <li style='width: 23%;' class='uk-active'><a"
//   );
//   document.write(
//     "                        class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                        aria-expanded='true'>今日</a>");
//   document.write("                    </li>");
//   document.write("                    <li style='width: 23%;' class='mx-1'><a");
//   document.write(
//     "                        class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                        aria-expanded='false'>昨日</a>");
//   document.write("                    </li>");
//   document.write("                    <li style='width: 23%;' class='mx-1'><a");
//   document.write(
//     "                        class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                        aria-expanded='false'>本週</a>");
//   document.write("                    </li>");
//   document.write("                    <li style='width: 23%;' class='mx-1'><a");
//   document.write(
//     "                        class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                        aria-expanded='false'>上週</a>");
//   document.write("                    </li>");
//   document.write("                  </ul>");
//   document.write("");
//   document.write(
//     "                  <ul class='uk-switcher px-5 py-2 w3-round-medium uk-active' style='touch-action: pan-y pinch-zoom;'>"
//   );
//   document.write("                    <!-- 今日 -->");
//   document.write("                    <li class='uk-active ' id=''>");
//   document.write("                      <!-- MMC -->");
//   document.write("                      <div class='bettingHistoryParent1'>");
//   document.write("                        <div class='bettingHistoryPage1'>");
//   document.write(
//     "                          <p class='pb-3 h3 font-weight-bold'>投注總計</p>"
//   );
//   document.write("                          <div class='row'>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>投注金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>有效投注:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>輸/贏:</span><span class='text-theme2'>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>返水金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row py-2'>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>真人</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent' data-toggle='modal'"
//   );
//   document.write(
//     "                                          data-target='#exampleModalCenter11' onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>體育</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent' data-toggle='modal'"
//   );
//   document.write(
//     "                                          data-target='#exampleModalCenter12' onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>賓果</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter13'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>電子</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter14'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>棋牌</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter15'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write(
//     "                                        <span class='text-theme2'>100.00</span></span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>捕魚</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter16'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                        <div class='bettingHistoryPage2'>");
//   document.write(
//     "                          <div class='col-12 mb-3 CardBgMd_txt_BG'>"
//   );
//   document.write("");
//   document.write(
//     "                            <p class='border rounded p-3 mt-3'>"
//   );
//   document.write(
//     "                              <button type='button' class='btn bg-transparent bettingHistoryBtn p-0 pr-3'>"
//   );
//   document.write(
//     "                                <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                              </button>");
//   document.write(
//     "                              共計2筆投注，投注金額200.00 有效投注 100.00 <span class='text-theme2'>輸/贏"
//   );
//   document.write("                                200.00</span>");
//   document.write("                            </p>");
//   document.write("");
//   document.write(
//     "                            <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                              <table class='table table-striped'>"
//   );
//   document.write("                                <thead>");
//   document.write("                                  <tr class='text-center'>");
//   document.write(
//     "                                    <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>平台</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>投注金額</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>有效投注</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>輸/贏</th>"
//   );
//   document.write("                                  </tr>");
//   document.write("                                </thead>");
//   document.write("                                <tbody>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write("");
//   document.write("                                </tbody>");
//   document.write("                              </table>");
//   document.write("                              <!-- 頁碼 -->");
//   document.write("                              <div class='text-center p-2'>");
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                <style>");
//   document.write("                                  .btn-active:hover {");
//   document.write("                                    color: #365a97;");
//   document.write(
//     "                                    border-color: #365a97 !important;"
//   );
//   document.write("                                    font-size: 1.1rem;");
//   document.write("                                  }");
//   document.write("                                </style>");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </li>");
//   document.write("                    <li class=' ' id=''>");
//   document.write("                      <!-- MMC -->");
//   document.write("                      <div class='bettingHistoryParent2'>");
//   document.write("                        <div class='bettingHistoryPage1'>");
//   document.write(
//     "                          <p class='pb-3 h3 font-weight-bold'>投注總計</p>"
//   );
//   document.write("                          <div class='row'>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>投注金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>有效投注:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>輸/贏:</span><span class='text-theme2'>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>返水金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row py-2'>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>真人</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter11'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>體育</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter12'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>賓果</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter13'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>電子</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter14'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>棋牌</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter15'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write(
//     "                                        <span class='text-theme2'>100.00</span></span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>捕魚</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter16'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                        <div class='bettingHistoryPage2'>");
//   document.write(
//     "                          <div class='col-12 mb-3 CardBgMd_txt_BG'>"
//   );
//   document.write("");
//   document.write(
//     "                            <p class='border rounded p-3 mt-3'>"
//   );
//   document.write(
//     "                              <button type='button' class='btn bg-transparent bettingHistoryBtn p-0 pr-3'>"
//   );
//   document.write(
//     "                                <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                              </button>");
//   document.write(
//     "                              共計2筆投注，投注金額200.00 有效投注 100.00 <span class='text-theme2'>輸/贏"
//   );
//   document.write("                                200.00</span>");
//   document.write("                            </p>");
//   document.write("");
//   document.write(
//     "                            <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                              <table class='table table-striped'>"
//   );
//   document.write("                                <thead>");
//   document.write("                                  <tr class='text-center'>");
//   document.write(
//     "                                    <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>平台</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>投注金額</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>有效投注</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>輸/贏</th>"
//   );
//   document.write("                                  </tr>");
//   document.write("                                </thead>");
//   document.write("                                <tbody>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write("");
//   document.write("                                </tbody>");
//   document.write("                              </table>");
//   document.write("                              <!-- 頁碼 -->");
//   document.write("                              <div class='text-center p-2'>");
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                <style>");
//   document.write("                                  .btn-active:hover {");
//   document.write("                                    color: #365a97;");
//   document.write(
//     "                                    border-color: #365a97 !important;"
//   );
//   document.write("                                    font-size: 1.1rem;");
//   document.write("                                  }");
//   document.write("                                </style>");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </li>");
//   document.write("                    <li class=' ' id=''>");
//   document.write("                      <!-- MMC -->");
//   document.write("                      <div class='bettingHistoryParent3'>");
//   document.write("                        <div class='bettingHistoryPage1'>");
//   document.write(
//     "                          <p class='pb-3 h3 font-weight-bold'>投注總計</p>"
//   );
//   document.write("                          <div class='row'>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>投注金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>有效投注:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>輸/贏:</span><span class='text-theme2'>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>返水金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row py-2'>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>真人</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter11'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>體育</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter12'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>賓果</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter13'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>電子</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter14'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>棋牌</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter15'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write(
//     "                                        <span class='text-theme2'>100.00</span></span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>捕魚</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter16'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                        <div class='bettingHistoryPage2'>");
//   document.write(
//     "                          <div class='col-12 mb-3 CardBgMd_txt_BG'>"
//   );
//   document.write("");
//   document.write(
//     "                            <p class='border rounded p-3 mt-3'>"
//   );
//   document.write(
//     "                              <button type='button' class='btn bg-transparent bettingHistoryBtn p-0 pr-3'>"
//   );
//   document.write(
//     "                                <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                              </button>");
//   document.write(
//     "                              共計2筆投注，投注金額200.00 有效投注 100.00 <span class='text-theme2'>輸/贏"
//   );
//   document.write("                                200.00</span>");
//   document.write("                            </p>");
//   document.write("");
//   document.write(
//     "                            <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                              <table class='table table-striped'>"
//   );
//   document.write("                                <thead>");
//   document.write("                                  <tr class='text-center'>");
//   document.write(
//     "                                    <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>平台</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>投注金額</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>有效投注</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>輸/贏</th>"
//   );
//   document.write("                                  </tr>");
//   document.write("                                </thead>");
//   document.write("                                <tbody>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write("");
//   document.write("                                </tbody>");
//   document.write("                              </table>");
//   document.write("                              <!-- 頁碼 -->");
//   document.write("                              <div class='text-center p-2'>");
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                <style>");
//   document.write("                                  .btn-active:hover {");
//   document.write("                                    color: #365a97;");
//   document.write(
//     "                                    border-color: #365a97 !important;"
//   );
//   document.write("                                    font-size: 1.1rem;");
//   document.write("                                  }");
//   document.write("                                </style>");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </li>");
//   document.write("                    <li class=' ' id=''>");
//   document.write("                      <!-- MMC -->");
//   document.write("                      <div class='bettingHistoryParent4'>");
//   document.write("                        <div class='bettingHistoryPage1'>");
//   document.write(
//     "                          <p class='pb-3 h3 font-weight-bold'>投注總計</p>"
//   );
//   document.write("                          <div class='row'>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>投注金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>有效投注:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>輸/贏:</span><span class='text-theme2'>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <span class='pr-2'>返水金額:</span><span>10,000</span>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row py-2'>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>真人</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter11'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>體育</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter12'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>賓果</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter13'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>電子</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter14'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>棋牌</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter15'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write(
//     "                                        <span class='text-theme2'>100.00</span></span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("                              </div>");
//   document.write("                            </div>");
//   document.write(
//     "                            <div class='col-12 col-lg-6 col-xl-4 p-2'>"
//   );
//   document.write(
//     "                              <div class='card my-2 card_color border-0'>"
//   );
//   document.write("                                <!--  -->");
//   document.write("                                <div class='card-header'>");
//   document.write(
//     "                                  <div class='row align-items-center'>"
//   );
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <i class='fa-solid fa-pipe line_theme_v'></i>"
//   );
//   document.write(
//     "                                      <span class='text-center font-weight-bold'>捕魚</span>"
//   );
//   document.write("                                    </div>");
//   document.write("                                    <div class='col'>");
//   document.write(
//     "                                      <p class='text-right'>"
//   );
//   document.write(
//     "                                        <button type='button' class='btn bg-transparent bettingHistory'"
//   );
//   document.write(
//     "                                          data-toggle='modal' data-target='#exampleModalCenter16'"
//   );
//   document.write(
//     "                                          onclick='bettingHistory('person')'>"
//   );
//   document.write(
//     "                                          <i class='fa-solid fa-angle-right'></i>"
//   );
//   document.write("                                        </button>");
//   document.write("                                      </p>");
//   document.write("                                    </div>");
//   document.write("                                  </div>");
//   document.write("                                </div>");
//   document.write("                                <!--  -->");
//   document.write(
//     "                                <ul class='list-group list-group-flush'>"
//   );
//   document.write(
//     "                                  <li class='list-group-item px-3 py-1 bg-transparent'>"
//   );
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>投注金額"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'></span>"
//   );
//   document.write("                                    </div>");
//   document.write(
//     "                                    <div class='row clearfix'>"
//   );
//   document.write(
//     "                                      <span class='col text-secondary fsz09'>有效投注"
//   );
//   document.write("                                        0.00</span>");
//   document.write(
//     "                                      <span class='col text-secondary fsz09 float-right text-right'>輸/贏"
//   );
//   document.write("                                        0.00</span>");
//   document.write("                                    </div>");
//   document.write("                                  </li>");
//   document.write("                                </ul>");
//   document.write("");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                        <div class='bettingHistoryPage2'>");
//   document.write(
//     "                          <div class='col-12 mb-3 CardBgMd_txt_BG'>"
//   );
//   document.write("");
//   document.write(
//     "                            <p class='border rounded p-3 mt-3'>"
//   );
//   document.write(
//     "                              <button type='button' class='btn bg-transparent bettingHistoryBtn p-0 pr-3'>"
//   );
//   document.write(
//     "                                <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                              </button>");
//   document.write(
//     "                              共計2筆投注，投注金額200.00 有效投注 100.00 <span class='text-theme2'>輸/贏"
//   );
//   document.write("                                200.00</span>");
//   document.write("                            </p>");
//   document.write("");
//   document.write(
//     "                            <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                              <table class='table table-striped'>"
//   );
//   document.write("                                <thead>");
//   document.write("                                  <tr class='text-center'>");
//   document.write(
//     "                                    <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>平台</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>投注金額</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>有效投注</th>"
//   );
//   document.write(
//     "                                    <th scope='col'>輸/贏</th>"
//   );
//   document.write("                                  </tr>");
//   document.write("                                </thead>");
//   document.write("                                <tbody>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write(
//     "                                  <tr class='text-center text-secondary'>"
//   );
//   document.write("                                    <th>2022-04-21</th>");
//   document.write("                                    <td>賓果/北京賽車</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write("                                    <td>100.00</td>");
//   document.write(
//     "                                    <td class='text-theme2'>100.00</td>"
//   );
//   document.write("                                  </tr>");
//   document.write("");
//   document.write("                                </tbody>");
//   document.write("                              </table>");
//   document.write("                              <!-- 頁碼 -->");
//   document.write("                              <div class='text-center p-2'>");
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                <style>");
//   document.write("                                  .btn-active:hover {");
//   document.write("                                    color: #365a97;");
//   document.write(
//     "                                    border-color: #365a97 !important;"
//   );
//   document.write("                                    font-size: 1.1rem;");
//   document.write("                                  }");
//   document.write("                                </style>");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </div>");
//   document.write("");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </li>");
//   document.write("                  </ul>");
//   document.write("");
//   document.write("                </div>");
//   document.write("");
//   document.write("              </li>");
//   document.write("              <li class='text-center pl-3 w-100'>");
//   document.write("                <!-- 交易紀錄 插入 -->");
//   document.write("                <div class='col-12 my-0 CardBgMd_txt_BG'>");
//   document.write(
//     "                  <p class='pt-3 h3 font-weight-bold '>交易紀錄查詢</p>"
//   );
//   document.write("                  <div class='my-3'>");
//   document.write("");
//   document.write(
//     "                    <ul class='uk-subnav uk-subnav-pill row centerCenter p-3' uk-switcher=''>"
//   );
//   document.write(
//     "                      <li style='width: 25%;' class='uk-active'><a"
//   );
//   document.write(
//     "                          class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                          aria-expanded='true'>存款</a>");
//   document.write("                      </li>");
//   document.write("                      <li style='width: 25%;'><a");
//   document.write(
//     "                          class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                          aria-expanded='false'>提款</a>");
//   document.write("                      </li>");
//   document.write("                      <li style='width: 25%;'><a");
//   document.write(
//     "                          class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write("                          aria-expanded='false'>轉點</a>");
//   document.write("                      </li>");
//   document.write("                    </ul>");
//   document.write("");
//   document.write(
//     "                    <ul class='uk-switcher px-3 py-2 w3-round-medium' style='touch-action: pan-y pinch-zoom;'>"
//   );
//   document.write("                      <!-- 存款 -->");
//   document.write("                      <li class='uk-active'>");
//   document.write("");
//   document.write("                        <div class='CardBgMd_txt_BG my-3'>");
//   document.write("");
//   document.write(
//     "                          <ul class='uk-subnav uk-subnav-pill row centerCenter p-3' uk-switcher=''>"
//   );
//   document.write(
//     "                            <li style='width: 25%;' class='uk-active'><a"
//   );
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='true'>今日</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>昨日</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>本週</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>上週</a>"
//   );
//   document.write("                            </li>");
//   document.write("                          </ul>");
//   document.write("");
//   document.write(
//     "                          <form class='p-3 row centerCenter' action='uk-margin' method='post'>"
//   );
//   document.write(
//     "                            <input class='px-1 py-0 text-secondary col-5 pr-3 rounded border bg-transparent'"
//   );
//   document.write(
//     "                              type='datetime-local' name='' id=''>"
//   );
//   document.write(
//     "                            <div class='p-1 col flex-grow-1'>"
//   );
//   document.write("                              <button type='button'");
//   document.write(
//     "                                class='btn bg-theme3 px-4 py-1 rounded rounded-pill text-light text-secondary py-0 rounded'>查詢"
//   );
//   document.write("                              </button>");
//   document.write("                            </div>");
//   document.write("                          </form>");
//   document.write("");
//   document.write(
//     "                          <ul class='uk-switcher px-3 py-2 w3-round-medium' style='touch-action: pan-y pinch-zoom;'>"
//   );
//   document.write("                            <!-- 今日 -->");
//   document.write("");
//   document.write("                            <li class=' uk-active'>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>已付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>未付款</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("");
//   document.write("                          </ul>");
//   document.write("");
//   document.write("                        </div>");
//   document.write("");
//   document.write("                      </li>");
//   document.write("                      <li class=''>");
//   document.write("");
//   document.write("                        <div class='CardBgMd_txt_BG my-3'>");
//   document.write("");
//   document.write(
//     "                          <ul class='uk-subnav uk-subnav-pill row centerCenter p-3' uk-switcher=''>"
//   );
//   document.write(
//     "                            <li style='width: 25%;' class='uk-active'><a"
//   );
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='true'>今日</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>昨日</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>本週</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>上週</a>"
//   );
//   document.write("                            </li>");
//   document.write("                          </ul>");
//   document.write("");
//   document.write(
//     "                          <form class='p-3 row centerCenter' action='uk-margin' method='post'>"
//   );
//   document.write(
//     "                            <input class='px-1 py-0 text-secondary col-5 pr-3 rounded border bg-transparent'"
//   );
//   document.write(
//     "                              type='datetime-local' name='' id=''>"
//   );
//   document.write(
//     "                            <div class='p-1 col flex-grow-1'>"
//   );
//   document.write("                              <button type='button'");
//   document.write(
//     "                                class='btn bg-theme3 px-4 py-1 rounded rounded-pill text-light text-secondary py-0 rounded'>查詢"
//   );
//   document.write("                              </button>");
//   document.write("                            </div>");
//   document.write("                          </form>");
//   document.write("");
//   document.write(
//     "                          <ul class='uk-switcher px-3 py-2 w3-round-medium' style='touch-action: pan-y pinch-zoom;'>"
//   );
//   document.write("                            <!-- 今日 -->");
//   document.write("                            <li class='uk-active'>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive py-3'>"
//   );
//   document.write("");
//   document.write(
//     "                                  <table class='table table-striped'>"
//   );
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>日期</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>訂單編號</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>銀行帳戶</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>狀態</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme2'>成功</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>2022-04-21</th>");
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                        <td>富邦銀行</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td class='text-theme3'>失敗</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                  <!-- 頁碼 -->");
//   document.write(
//     "                                  <div class='text-center p-2'>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>...</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>9</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active btn-sm border-secondary mx-1'>10</div>"
//   );
//   document.write(
//     "                                    <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                                    <style>");
//   document.write("                                      .btn-active:hover {");
//   document.write("                                        color: #365a97;");
//   document.write(
//     "                                        border-color: #365a97 !important;"
//   );
//   document.write("                                        font-size: 1.1rem;");
//   document.write("                                      }");
//   document.write("                                    </style>");
//   document.write("                                  </div>");
//   document.write("");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                          </ul>");
//   document.write("");
//   document.write("                        </div>");
//   document.write("");
//   document.write("                      </li>");
//   document.write("                      <li class=''>");
//   document.write("");
//   document.write("                        <div class='CardBgMd_txt_BG my-3'>");
//   document.write("");
//   document.write(
//     "                          <ul class='uk-subnav uk-subnav-pill row centerCenter p-3' uk-switcher=''>"
//   );
//   document.write(
//     "                            <li style='width: 25%;' class='uk-active'><a"
//   );
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='true'>今日</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>昨日</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>本週</a>"
//   );
//   document.write("                            </li>");
//   document.write("                            <li style='width: 25%;'><a");
//   document.write(
//     "                                class='centerCenter w3-round-medium text-dark rounded rounded-pill py-2 px-0' href='#'"
//   );
//   document.write(
//     "                                aria-expanded='false'>上週</a>"
//   );
//   document.write("                            </li>");
//   document.write("                          </ul>");
//   document.write("");
//   document.write(
//     "                          <form class='p-3 row centerCenter' action='uk-margin' method='post'>"
//   );
//   document.write(
//     "                            <input class='px-1 py-0 text-secondary col-5 pr-3 rounded border bg-transparent'"
//   );
//   document.write(
//     "                              type='datetime-local' name='' id=''>"
//   );
//   document.write(
//     "                            <div class='p-1 col flex-grow-1'>"
//   );
//   document.write("                              <button type='button'");
//   document.write(
//     "                                class='btn bg-theme3 px-4 py-1 rounded rounded-pill text-light text-secondary py-0 rounded'>查詢"
//   );
//   document.write("                              </button>");
//   document.write("                            </div>");
//   document.write("                          </form>");
//   document.write("");
//   document.write(
//     "                          <ul class='uk-switcher px-3 py-2 w3-round-medium' style='touch-action: pan-y pinch-zoom;'>"
//   );
//   document.write("                            <!-- 今日 -->");
//   document.write("                            <li class='uk-active'>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive'>"
//   );
//   document.write("");
//   document.write("                                  <table class='table '>");
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>類型</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>流水</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>時間</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>交易編號</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive'>"
//   );
//   document.write("");
//   document.write("                                  <table class='table '>");
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>類型</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>流水</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>時間</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>交易編號</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive'>"
//   );
//   document.write("");
//   document.write("                                  <table class='table '>");
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>類型</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>流水</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>時間</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>交易編號</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                            <li class=''>");
//   document.write("");
//   document.write("                              <div class='col-12 mb-3 '>");
//   document.write("");
//   document.write(
//     "                                <div class='table-responsive'>"
//   );
//   document.write("");
//   document.write("                                  <table class='table '>");
//   document.write("                                    <thead>");
//   document.write(
//     "                                      <tr class='text-center'>"
//   );
//   document.write(
//     "                                        <th scope='col'>類型</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>金額</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>流水</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>時間</th>"
//   );
//   document.write(
//     "                                        <th scope='col'>交易編號</th>"
//   );
//   document.write("                                      </tr>");
//   document.write("                                    </thead>");
//   document.write("                                    <tbody>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          儲值");
//   document.write("                                        </th>");
//   document.write("                                        <td>1000.00</td>");
//   document.write("                                        <td>1000.00</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write(
//     "                                      <tr class='text-center text-secondary'>"
//   );
//   document.write("                                        <th>");
//   document.write("                                          優惠");
//   document.write("                                        </th>");
//   document.write("                                        <td>1600.00</td>");
//   document.write("                                        <td>xxx</td>");
//   document.write(
//     "                                        <td>2022-03-30 15:20:51</td>"
//   );
//   document.write(
//     "                                        <td>DC2220646HC5</td>"
//   );
//   document.write("                                      </tr>");
//   document.write("");
//   document.write("                                    </tbody>");
//   document.write("                                  </table>");
//   document.write("                                </div>");
//   document.write("");
//   document.write("                              </div>");
//   document.write("");
//   document.write("                            </li>");
//   document.write("                          </ul>");
//   document.write("");
//   document.write("                        </div>");
//   document.write("");
//   document.write("                      </li>");
//   document.write("                    </ul>");
//   document.write("");
//   document.write("                  </div>");
//   document.write("");
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("");
//   document.write("              <li class='text-center pl-3 w-100'>");
//   document.write("                <!-- 帳戶管理 插入 -->");
//   document.write("                <div class='' id='AccountNanagement'>");
//   document.write("                  <div class='col-12 my-0 CardBgMd_txt_BG'>");
//   document.write("                    <p class='py-3 clearfix'>");
//   document.write(
//     "                      <span class='h3 font-weight-bold'>銀行帳戶</span>"
//   );
//   document.write(
//     "                      <span class='float-right'><span>1</span><span>/3</span></span>"
//   );
//   document.write("                    </p>");
//   document.write("                    <div class='row p-3'>");
//   document.write("                      <div class='col-4 px-3'>");
//   document.write("                        <div class='uk-inline'>");
//   document.write(
//     "                          <img src='../img/手機各分頁img/bankcard.png' alt='' class='img-fluid'>"
//   );
//   document.write("");
//   document.write(
//     "                          <div class='uk-overlay uk-overlay-default uk-position-center bg-transparent'>"
//   );
//   document.write("                            <div class='row'>");
//   document.write(
//     "                              <div class='col-12 text-right h5 font-weight-bold'>富邦銀行</div>"
//   );
//   document.write(
//     "                              <div class='col-12 text-left font-weight-bold'>XXXX - 1234</div>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-4 px-3'>");
//   document.write(
//     "                        <button class='p-0 btn bg-transparent' id='AccountNanagement1Btn'>"
//   );
//   document.write(
//     "                          <img src='../img/手機各分頁img/add_bankcard.png' alt='' class=''>"
//   );
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-4 px-3 d-none'>");
//   document.write(
//     "                        <button class='p-0 btn bg-transparent'>"
//   );
//   document.write(
//     "                          <img src='../img/手機各分頁img/add_bankcard.png' alt='' class=''>"
//   );
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("");
//   document.write("                  </div>");
//   document.write("                  <div class='col-12 my-2 CardBgMd_txt_BG'>");
//   document.write("                    <p class='py-3 clearfix'>");
//   document.write(
//     "                      <span class='h3 font-weight-bold'>信用卡</span>"
//   );
//   document.write(
//     "                      <span class='float-right'><span>1</span><span>/3</span></span>"
//   );
//   document.write("                    </p>");
//   document.write("                    <div class='row p-3'>");
//   document.write("                      <div class='col-4 px-3'>");
//   document.write("                        <div class='uk-inline'>");
//   document.write(
//     "                          <img src='../img/手機各分頁img/bankcard.png' alt='' class='img-fluid'>"
//   );
//   document.write("");
//   document.write(
//     "                          <div class='uk-overlay uk-overlay-default uk-position-center bg-transparent'>"
//   );
//   document.write("                            <div class='row'>");
//   document.write(
//     "                              <div class='col-12 text-right h5 font-weight-bold'>富邦銀行</div>"
//   );
//   document.write(
//     "                              <div class='col-12 text-left font-weight-bold'>XXXX - 1234</div>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-4 px-3'>");
//   document.write(
//     "                        <button class='p-0 btn bg-transparent' id='AccountNanagement2Btn'>"
//   );
//   document.write(
//     "                          <img src='../img/手機各分頁img/Frame 736.png' alt='' class=''>"
//   );
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-4 px-3 d-none'>");
//   document.write(
//     "                        <button class='p-0 btn bg-transparent'>"
//   );
//   document.write(
//     "                          <img src='../img/手機各分頁img/Frame 736.png' alt='' class=''>"
//   );
//   document.write("                        </button>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("");
//   document.write("                  </div>");
//   document.write("                </div>");
//   document.write("                <div class='' id='AccountNanagement1'>");
//   document.write("                  <div class='col-12 my-2 CardBgMd_txt_BG'>");
//   document.write("                    <p class='p-3 mt-3'>");
//   document.write(
//     "                      <button type='button' class='btn bg-transparent  p-0 pr-3 AccountNanagementBtn'>"
//   );
//   document.write(
//     "                        <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                      </button>");
//   document.write(
//     "                      <span class='h3 font-weight-bold'>新增銀行帳戶</span>"
//   );
//   document.write("                    </p>");
//   document.write(
//     "                    <div class='col-12 bg-linear-theme py-3'>"
//   );
//   document.write("                      <div class='py-2'>");
//   document.write(
//     "                        <p class='font-weight-bold text-dark'>帳戶人姓名</p>"
//   );
//   document.write(
//     "                        <input type='text' class='btn-block bg-transparent border-bottom fsz09' placeholder='請輸入帳戶人姓名'>"
//   );
//   document.write(
//     "                        <p class='fsz-08 text-black-50'>為了您的資金能夠迅速到帳，請確保填寫的姓名與銀行卡的開戶姓名一致</p>"
//   );
//   document.write("                      </div>");
//   document.write("                      <div class='py-2'>");
//   document.write(
//     "                        <p class='font-weight-bold text-dark'>銀行代碼與名稱</p>"
//   );
//   document.write(
//     "                        <input type='text' class='btn-block bg-transparent border-bottom fsz09' placeholder='請選擇銀行'>"
//   );
//   document.write("                      </div>");
//   document.write("                      <div class='py-2'>");
//   document.write(
//     "                        <p class='font-weight-bold text-dark'>銀行帳號</p>"
//   );
//   document.write(
//     "                        <input type='text' class='btn-block bg-transparent border-bottom fsz09' placeholder='請輸入帳號'>"
//   );
//   document.write(
//     "                        <p class='fsz-08 text-black-50'>請認真檢查儀行帳號，帳號錯誤資金無法到帳</p>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <p class='font-weight-bold text-dark px-5 text-center'>信息在確認後將無法修改如需幫忙，請<a href='#'"
//   );
//   document.write(
//     "                          class='text-theme'> <button type='button'"
//   );
//   document.write(
//     "                            class='uk-button bg-transparent text-theme centerCenter px-0 py-1' data-toggle='modal'"
//   );
//   document.write(
//     "                            data-target='#exampleModalCenter2'>"
//   );
//   document.write("                            聯繫客服");
//   document.write("                          </button></a>");
//   document.write("                      </p>");
//   document.write("                      <div class='py-2'>");
//   document.write(
//     "                        <div class='btn btn-block bg-transparent border border-secondary py-5'>"
//   );
//   document.write(
//     "                          <p class='centerCenter text-black-50 font-weight-bold'>點擊此處上傳驗證資料</p>"
//   );
//   document.write(
//     "                          <p class='centerCenter text-black-50 font-weight-bold'>身分證+健保卡(或第二有效證件)+銀行存摺 合拍(示意圖)</p>"
//   );
//   document.write(
//     "                          <p class='centerCenter text-black-50 font-weight-bold'>*最多上傳40筆，上傳檔案大小請在5MB以下</p>"
//   );
//   document.write("                        </div>");
//   document.write(
//     "                        <input type='submit' value='上傳' class='btn-secondary mt-4 btn btn-block w-25 centerCenter'>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <p class='font-weight-bold text-dark'>範例:</p>"
//   );
//   document.write("                      <div class='row'>");
//   document.write("                        <div class='col-12'>");
//   document.write(
//     "                          <img class='img-fluid w-75' src='../img/桌機各分頁img/MyPurse/Group 140.jpg' alt=''>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='col-12'>");
//   document.write("                          <input type='submit' value='完成'");
//   document.write(
//     "                            class='bg-theme3 pr-3 font-weight-bold text-light mt-3 btn rounded rounded-pill px-4 centerCenter'>"
//   );
//   document.write("                          <input type='submit' value='取消'");
//   document.write(
//     "                            class='font-weight-bold text-dark border mt-3 btn rounded rounded-pill px-4 centerCenter'"
//   );
//   document.write(
//     "                            style='background-color: #fff;'>"
//   );
//   document.write(
//     "                          <p class='font-weight-bold text-dark px-5 text-center'>如需幫助，請<a href='#' class='text-theme'>"
//   );
//   document.write(
//     "                              <button type='button' class='uk-button bg-transparent text-theme centerCenter px-0 py-1'"
//   );
//   document.write(
//     "                                data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                                聯繫客服");
//   document.write("                              </button></a>");
//   document.write("                          </p>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("                </div>");
//   document.write("                <div class='' id='AccountNanagement2'>");
//   document.write("                  <div class='col-12 my-2 CardBgMd_txt_BG'>");
//   document.write("                    <p class='p-3 mt-3'>");
//   document.write(
//     "                      <button type='button' class='btn bg-transparent  p-0 pr-3 AccountNanagementBtn'>"
//   );
//   document.write(
//     "                        <i class='fa-solid fa-angle-left'></i>"
//   );
//   document.write("                      </button>");
//   document.write(
//     "                      <span class='h3 font-weight-bold'>新增信用卡</span>"
//   );
//   document.write("                    </p>");
//   document.write("                    <div class='py-2'>");
//   document.write(
//     "                      <p class='font-weight-bold text-dark'>持卡人姓名</p>"
//   );
//   document.write(
//     "                      <input type='text' class='btn-block bg-transparent border-bottom fsz09' placeholder='請輸入帳戶人姓名'>"
//   );
//   document.write(
//     "                      <p class='fsz-08 text-black-50'>為了您的資金能夠迅速到帳，請確保填寫的姓名與銀行卡的開戶姓名一致</p>"
//   );
//   document.write("                    </div>");
//   document.write("                    <div class='py-2'>");
//   document.write(
//     "                      <p class='font-weight-bold text-dark'>信用卡卡號</p>"
//   );
//   document.write(
//     "                      <input type='text' class='btn-block bg-transparent border-bottom fsz09' placeholder='請輸入卡號'>"
//   );
//   document.write("                    </div>");
//   document.write("");
//   document.write("                    <div class='py-2'>");
//   document.write(
//     "                      <div class='btn btn-block bg-transparent border border-secondary py-5'>"
//   );
//   document.write(
//     "                        <p class='centerCenter text-black-50 font-weight-bold'>點擊此處上傳驗證資料</p>"
//   );
//   document.write(
//     "                        <p class='centerCenter text-black-50 font-weight-bold'>身分證+健保卡(或第二有效證件)+銀行存摺 合拍(示意圖)</p>"
//   );
//   document.write(
//     "                        <p class='centerCenter text-black-50 font-weight-bold'>*最多上傳40筆，上傳檔案大小請在5MB以下</p>"
//   );
//   document.write("                      </div>");
//   document.write(
//     "                      <input type='submit' value='上傳' class='btn-secondary mt-4 btn btn-block w-25 centerCenter'>"
//   );
//   document.write("                    </div>");
//   document.write(
//     "                    <p class='font-weight-bold text-dark'>範例:</p>"
//   );
//   document.write("                    <div class='row'>");
//   document.write("                      <div class='col-12'>");
//   document.write(
//     "                        <img class='img-fluid' src='../img/桌機各分頁img/MyPurse/Group 139.jpg' alt=''>"
//   );
//   document.write("                      </div>");
//   document.write("                      <div class='col-12'>");
//   document.write(
//     "                        <img src='../img/手機各分頁img/Frame749.png' alt='' class='w-25 img-fluid pt-2'>"
//   );
//   document.write("                      </div>");
//   document.write("                      <div class='col-12'>");
//   document.write("                        <input type='submit' value='完成'");
//   document.write(
//     "                          class='bg-theme3 pr-3 font-weight-bold text-light mt-3 btn rounded rounded-pill px-4 centerCenter'>"
//   );
//   document.write("                        <input type='submit' value='取消'");
//   document.write(
//     "                          class='font-weight-bold text-dark border mt-3 btn rounded rounded-pill px-4 centerCenter'"
//   );
//   document.write("                          style='background-color: #fff;'>");
//   document.write(
//     "                        <p class='font-weight-bold text-dark px-5 text-center'>如需幫助，請<a href='#' class='text-theme'>"
//   );
//   document.write(
//     "                            <button type='button' class='uk-button bg-transparent text-theme centerCenter px-0 py-1'"
//   );
//   document.write(
//     "                              data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                              聯繫客服");
//   document.write("                            </button></a>");
//   document.write("                        </p>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("");
//   document.write("              <li class='text-center pl-3 w-100'>");
//   document.write("                <!-- 邀請好友 插入 -->");
//   document.write("                <div class='row m-0 p-0'>");
//   document.write("                  <div class='col-12 m-0 p-0'>");
//   document.write("");
//   document.write(
//     "                    <div class='CardBgMd font-weight-bold pb-3 row  m-0'>"
//   );
//   document.write(
//     "                      <div class='row centerCenter w-100 pt-2'>"
//   );
//   document.write("                        <div class='col px-0 text-center'>");
//   document.write(
//     "                          <p class='font-weight-bold fsz-1 text-theme text-center'>0</p>"
//   );
//   document.write(
//     "                          <p class='text-black fsz-1 text-center'>邀請註冊(人)</p>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='col px-0 text-center'>");
//   document.write(
//     "                          <p class='font-weight-bold fsz-1 text-theme text-center'>0</p>"
//   );
//   document.write(
//     "                          <p class='text-black fsz-1 text-center'>獲得邀請彩金(元)</p>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='col px-0 text-center'>");
//   document.write(
//     "                          <p class='font-weight-bold fsz-1 text-theme text-center'>0</p>"
//   );
//   document.write(
//     "                          <p class='text-black fsz-1 text-center'>邀請成功(人)</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("");
//   document.write("                    <!-- 背景卡片 及title -->");
//   document.write(
//     "                    <div class='row CardBgMd input-group p-3'>"
//   );
//   document.write("                      <!-- title卡片 -->");
//   document.write("                      <div class='uk-inline w-100 my-3'>");
//   document.write(
//     "                        <img src='../img/手機各分頁img/gameBlogPage/OB/0.png' class='img-fluid' alt=''>"
//   );
//   document.write(
//     "                        <div class='uk-overlay uk-overlay-default uk-position-center w-100 text-center bg-transparent'>"
//   );
//   document.write(
//     "                          <div class='h3 py-3 text-dark font-weight-bold pl-5'>邀請連結</div>"
//   );
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <!--  -->");
//   document.write(
//     "                      <input type='text' class='form-control fsz-08 border-0 text-secondary'"
//   );
//   document.write(
//     "                        placeholder='https://www.918bt.net/0987123654' aria-label='Recipient's username'"
//   );
//   document.write(
//     "                        aria-describedby='basic-addon2' style='background: #EAEAEA;'>"
//   );
//   document.write(
//     "                      <button type='button' class='input-group-append btn m-0 p-0'>"
//   );
//   document.write(
//     "                        <span class='input-group-text bd-theme bg-theme3 text-light py-1' id='basic-addon2'>"
//   );
//   document.write("                          複製</span>");
//   document.write("                      </button>");
//   document.write("                    </div>");
//   document.write("                    <!-- MOD -->");
//   document.write("                    <div class='CardBgMd px-3 row'>");
//   document.write("                      <div class='col-12 py-3 px-0'>");
//   document.write("                        <!-- title卡片 -->");
//   document.write("                        <div class='uk-inline w-100 my-3'>");
//   document.write(
//     "                          <img src='../img/手機各分頁img/gameBlogPage/OB/0.png' class='img-fluid' alt=''>"
//   );
//   document.write("                          <div");
//   document.write(
//     "                            class='uk-overlay uk-overlay-default uk-position-center w-100 text-center bg-transparent'>"
//   );
//   document.write(
//     "                            <div class='h3 py-3 text-dark font-weight-bold pl-5'>活動詳情</div>"
//   );
//   document.write("                          </div>");
//   document.write("                        </div>");
//   document.write("                        <!-- MOD -->");
//   document.write("                        <p class='col-12 py-2'>");
//   document.write(
//     "                          凡是在本網站進行遊戲的會員，推薦好友加入並進行存款成功，即可向博天堂娛樂城<button type='button'"
//   );
//   document.write(
//     "                            class='uk-button bg-transparent text-theme centerCenter p-0 fsz-1' data-toggle='modal'"
//   );
//   document.write(
//     "                            data-target='#exampleModalCenter2'>"
//   );
//   document.write(
//     "                            <button type='button' class='uk-button bg-transparent text-theme centerCenter p-0 fsz-1'"
//   );
//   document.write(
//     "                              data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                              線上客服");
//   document.write("                            </button>");
//   document.write(
//     "                          </button>申請優惠金500，還不趕快通知好友一起獲得高額彩金!!"
//   );
//   document.write(
//     "                          更好康的是，此筆獎金只需1倍流水即可取款，還不呼朋引伴領獎金。"
//   );
//   document.write("                        </p>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-12'>");
//   document.write(
//     "                        <p class=' font-weight-bold text-theme'>"
//   );
//   document.write("                          【優惠申請方式與要求】");
//   document.write("                        </p>");
//   document.write("                        <div class=''>");
//   document.write(
//     "                          <p>點擊申請之後聯繫<button type='button'"
//   );
//   document.write(
//     "                              class='uk-button bg-transparent text-theme centerCenter p-0 fsz-1' data-toggle='modal'"
//   );
//   document.write(
//     "                              data-target='#exampleModalCenter2'>"
//   );
//   document.write("                              線上客服");
//   document.write("                            </button>領取</p>");
//   document.write("                          <ol>");
//   document.write("                            <li>活動方案</li>");
//   document.write("                            <li>會員帳號</li>");
//   document.write("                            <li>推薦好友帳號</li>");
//   document.write("                          </ol>");
//   document.write(
//     "                          <p>「按照上述格式<button type='button'"
//   );
//   document.write(
//     "                              class='uk-button bg-transparent text-theme centerCenter px-0 py-1 fsz-1'"
//   );
//   document.write(
//     "                              data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                              聯繫客服");
//   document.write("                            </button>」</p>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-12'>");
//   document.write(
//     "                        <p class=' font-weight-bold text-theme'>"
//   );
//   document.write("                          【活動條件】");
//   document.write("                        </p>");
//   document.write("                        <div class=''>");
//   document.write("                          <ol>");
//   document.write(
//     "                            <li>推薦人與被推薦人都需存款1000以上，且不包含享受首存優惠的金額</li>"
//   );
//   document.write(
//     "                            <li>每位被推薦人只可推薦一次，且註冊時必須填寫推薦碼</li>"
//   );
//   document.write(
//     "                            <li>若是推薦人推薦多次，推薦人每次都需要存款1000以上，並且不包含申請其他任何優惠的金額</li>"
//   );
//   document.write("                          </ol>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='col-12 pb-5'>");
//   document.write(
//     "                        <p class=' font-weight-bold text-theme'>"
//   );
//   document.write("                          【優惠規則與條款】");
//   document.write("                        </p>");
//   document.write("                        <div class=''>");
//   document.write(
//     "                          <p>點擊申請之後聯繫<button type='button'"
//   );
//   document.write(
//     "                              class='uk-button bg-transparent text-theme centerCenter p-0 fsz-1' data-toggle='modal'"
//   );
//   document.write(
//     "                              data-target='#exampleModalCenter2'>"
//   );
//   document.write("                              線上客服");
//   document.write("                            </button>領取</p>");
//   document.write("                          <ol>");
//   document.write(
//     "                            <li>提供被推薦人帳號、電話、lineID予<button type='button'"
//   );
//   document.write(
//     "                                class='uk-button bg-transparent text-theme centerCenter p-0 fsz-1' data-toggle='modal'"
//   );
//   document.write(
//     "                                data-target='#exampleModalCenter2'>"
//   );
//   document.write("                                線上客服");
//   document.write("                              </button>進行申請</li>");
//   document.write("                            <li>");
//   document.write(
//     "                              推薦人(舊會員)以及被推薦人(新會員)都須有存款1000以上之記錄(有領優惠之該筆存款不予計算)"
//   );
//   document.write("                            </li>");
//   document.write(
//     "                            <li>每位相同註冊資料包含IP位置的新會員僅限被推薦一次，且需完成銀行綁定</li>"
//   );
//   document.write("                            <li>");
//   document.write(
//     "                              舊會員可推薦多位好友，推薦優惠金無上限"
//   );
//   document.write("                            </li>");
//   document.write("                            <li>");
//   document.write(
//     "                              該優惠進行彩票以及棋牌類型投注將不計算出款流水"
//   );
//   document.write("                            </li>");
//   document.write("                            <li>");
//   document.write(
//     "                              若會員有重複註冊帳號惡意套取優惠或其他非正當盈利之行為，將扣除優惠以及所有不當盈利"
//   );
//   document.write("                            </li>");
//   document.write("                            <li>");
//   document.write("                              出款流水僅需一倍即可");
//   document.write("                            </li>");
//   document.write("                            <li>");
//   document.write(
//     "                              若同時推薦多位好友，每位都需有存1000以上之紀錄(有領優惠之該筆存款不予計算)"
//   );
//   document.write("                            </li>");
//   document.write("                            <li>");
//   document.write("                              僅限網站上直營會員享有此優惠");
//   document.write("                            </li>");
//   document.write("                          </ol>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </div>");
//   document.write("                  </div>");
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("");
//   document.write("              <li class='text-center pl-3 w-100'>");
//   document.write("                <!-- 幫助中心 插入 -->");
//   document.write(
//     "                <div class='col-12 p-0 pb-5 CardBgMd_txt_BG p-3 ' id=''>"
//   );
//   document.write(
//     "                  <p class='py-3 h3 font-weight-bold'>幫助中心</p>"
//   );
//   document.write(
//     "                  <ul class='uk-subnav uk-subnav-pill row p-3' uk-switcher=''>"
//   );
//   document.write("                    <li class='uk-active mr-3'><a");
//   document.write(
//     "                        class='centerCenter w3-round-medium text-dark px-5 py-2 rounded rounded-pill' href='#'"
//   );
//   document.write("                        aria-expanded='true'>新手幫助</a>");
//   document.write("                    </li>");
//   document.write(
//     "                    <li class='mr-3'><a class='centerCenter w3-round-medium text-dark px-5 py-2 rounded rounded-pill'"
//   );
//   document.write(
//     "                        href='#' aria-expanded='false'>合營代理</a>"
//   );
//   document.write("                    </li>");
//   document.write(
//     "                    <li class='mr-3'><a class='centerCenter w3-round-medium text-dark px-5 py-2 rounded rounded-pill'"
//   );
//   document.write(
//     "                        href='#' aria-expanded='false'>常見問題</a>"
//   );
//   document.write("                    </li>");
//   document.write("                  </ul>");
//   document.write("");
//   document.write("");
//   document.write(
//     "                  <ul class='uk-switcher' style='touch-action: pan-y pinch-zoom;'>"
//   );
//   document.write("                    <!-- MOD -->");
//   document.write("                    <li class='px-4 uk-active'>");
//   document.write(
//     "                      <ul class='justify-content-between uk-tab row' uk-tab=''>"
//   );
//   document.write(
//     "                        <li class='uk-active centerCenter col-4'><a href='#' aria-expanded='true'>提款</a></li>"
//   );
//   document.write(
//     "                        <li class=' centerCenter col-4'><a href='#' aria-expanded='false'>存款</a></li>"
//   );
//   document.write(
//     "                        <li class=' centerCenter col-4'><a href='#' aria-expanded='false'>轉帳</a></li>"
//   );
//   document.write("                      </ul>");
//   document.write("");
//   document.write(
//     "                      <ul class='uk-switcher uk-margin' style='touch-action: pan-y pinch-zoom;'>"
//   );
//   document.write("                        <li class='uk-active'>");
//   document.write("                          <!--  -->");
//   document.write("                          <div class='row px-3 py-2'>");
//   document.write("                            <div class=''>");
//   document.write(
//     "                              <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>1</div>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <p class='font-weight-bold fsz-12'>提款規則？</p>"
//   );
//   document.write(
//     "                              <p class='text-secondary'>一般存款沒有享受任何優惠的情況下，達到1倍流水即可出款。</p>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row px-3 py-2'>");
//   document.write("                            <div class=''>");
//   document.write(
//     "                              <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>2</div>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <p class='font-weight-bold fsz-12'>提款手續費</p>"
//   );
//   document.write(
//     "                              <p class='text-secondary'>每天一次免費次數，第二次起手續費收取1%</p>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row px-3 py-2'>");
//   document.write("                            <div class=''>");
//   document.write(
//     "                              <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>3</div>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <p class='font-weight-bold fsz-12'>驗證本人帳戶身分</p>"
//   );
//   document.write("                              <p class='text-secondary'>");
//   document.write(
//     "                                首次存款後，需要驗證您存款的銀行帳戶資訊，請您提供雙證件(身分證+駕照或健保卡)及存摺，於＂綁定銀行帳戶＂頁面綁定銀行帳戶及上傳照片，或依照客服指示放置物品，並傳送圖片檔案給客服確認。"
//   );
//   document.write("                              </p>");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </li>");
//   document.write("                        <li>");
//   document.write("                          <!--  -->");
//   document.write("                          <div class='row px-3 py-2'>");
//   document.write("                            <div class=''>");
//   document.write(
//     "                              <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>1</div>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <p class='font-weight-bold fsz-12'>如何儲值？</p>"
//   );
//   document.write("                              <p class='text-secondary'>");
//   document.write(
//     "                                首先您需要加入博天堂娛樂城會員，在您註冊完成後登入博天堂娛樂城帳戶，即可在首頁右上角找到儲值按鈕，進入後即可找到適合您的存款方式。"
//   );
//   document.write("                              </p>");
//   document.write(
//     "                              <p class='text-secondary'>作為我們尊貴的客戶，我們會一直努力讓銀行免收取何任費用，讓你不會被我們收取任何在存款時或從您的帳戶中提款時的費用。</p>"
//   );
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row px-3 py-2'>");
//   document.write("                            <div class=''>");
//   document.write(
//     "                              <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>2</div>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <p class='font-weight-bold fsz-12'>儲值一般多久到帳戶？</p>"
//   );
//   document.write(
//     "                              <p class='text-secondary'>系統約於5~20分鐘內自動入點，若繳費完90分鐘後點數仍未入帳，請洽詢<button type='button'"
//   );
//   document.write(
//     "                                  class='uk-button bg-transparent text-theme centerCenter p-0 fsz-1' data-toggle='modal'"
//   );
//   document.write(
//     "                                  data-target='#exampleModalCenter2'>"
//   );
//   document.write("                                  線上客服");
//   document.write("                                </button>。</p>");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </li>");
//   document.write("                        <li>");
//   document.write("                          <!--  -->");
//   document.write("");
//   document.write("                          <div class='row px-3 py-2'>");
//   document.write("                            <div class=''>");
//   document.write(
//     "                              <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>1</div>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <p class='font-weight-bold fsz-12'>怎麼轉帳？</p>"
//   );
//   document.write(
//     "                              <p class='text-secondary'>登錄帳號——點擊官網首頁上方會員帳號——我的錢包——點擊轉帳——轉帳頁面"
//   );
//   document.write("                              </p>");
//   document.write(
//     "                              <p class='text-secondary'>轉帳步驟：</p>"
//   );
//   document.write("                              <ol>");
//   document.write(
//     "                                <li>A. 在轉帳該頁面選擇轉出轉入的錢包</li>"
//   );
//   document.write(
//     "                                <li>B.輸入金額，或點擊最大金額</li>"
//   );
//   document.write("                                <li>C. 點擊立即轉帳</li>");
//   document.write("                              </ol>");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row px-3 py-2'>");
//   document.write("                            <div class=''>");
//   document.write(
//     "                              <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>2</div>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <p class='font-weight-bold fsz-12'>轉帳到遊戲錢包，金額變少？</p>"
//   );
//   document.write(
//     "                              <p class='text-secondary'>大部分金額變少或金額變負數是系統二次結算導致的結果，若對該部分有疑問可聯繫"
//   );
//   document.write(
//     "                                <button type='button' class='uk-button bg-transparent text-theme centerCenter p-0 fsz-1'"
//   );
//   document.write(
//     "                                  data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                                  線上客服");
//   document.write("                                </button>");
//   document.write("                                進行詳細諮詢。");
//   document.write("                              </p>");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                          <div class='row px-3 py-2'>");
//   document.write("                            <div class=''>");
//   document.write(
//     "                              <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>3</div>"
//   );
//   document.write("                            </div>");
//   document.write("                            <div class='col'>");
//   document.write(
//     "                              <p class='font-weight-bold fsz-12'>主錢包，轉遊戲錢包失敗？</p>"
//   );
//   document.write(
//     "                              <p class='text-secondary text-justify'>查看對應遊戲是否處於維護當中，若遊戲處於維護狀態是不可以進行轉帳的。"
//   );
//   document.write(
//     "                                是否存在頻繁轉帳操作，因轉帳人數較多，單個帳戶若頻繁轉帳會有網路延遲，從而造成資料更新不及時或資料丟失。 請嘗試轉入整數。</p>"
//   );
//   document.write(
//     "                              <p class='text-secondary'>聯繫"
//   );
//   document.write(
//     "                                <button type='button' class='uk-button bg-transparent text-theme centerCenter p-0 fsz-1'"
//   );
//   document.write(
//     "                                  data-toggle='modal' data-target='#exampleModalCenter2'>"
//   );
//   document.write("                                  線上客服");
//   document.write("                                </button>");
//   document.write("                                進行諮詢。");
//   document.write("                              </p>");
//   document.write("                            </div>");
//   document.write("                          </div>");
//   document.write("                        </li>");
//   document.write("");
//   document.write("                      </ul>");
//   document.write("                    </li>");
//   document.write("                    <li class='px-4 '>");
//   document.write("                      <div class='table-responsive py-3'>");
//   document.write(
//     "                        <p class='bg-theme3 text-light py-2 text-center'>退傭</p>"
//   );
//   document.write("                        <table class='table table-striped'>");
//   document.write("                          <thead>");
//   document.write("                            <tr class='text-center'>");
//   document.write("                              <th scope='col'>輸贏值</th>");
//   document.write("                              <th scope='col'>退傭比例</th>");
//   document.write("                              <th scope='col'>活躍人數</th>");
//   document.write("                            </tr>");
//   document.write("                          </thead>");
//   document.write("                          <tbody>");
//   document.write("                            <tr class='text-center'>");
//   document.write("                              <th>10W</th>");
//   document.write("                              <td>20%</td>");
//   document.write("                              <td>有效會員人數3個</td>");
//   document.write("                            </tr>");
//   document.write("                            <tr class='text-center'>");
//   document.write("                              <th>20W-30W</th>");
//   document.write("                              <td>30%</td>");
//   document.write("                              <td>有效會員人數15個</td>");
//   document.write("                            </tr>");
//   document.write("                            <tr class='text-center'>");
//   document.write("                              <th>30W-100W</th>");
//   document.write("                              <td>35%</td>");
//   document.write("                              <td>有效會員人數20個</td>");
//   document.write("                            </tr>");
//   document.write("                            <tr class='text-center'>");
//   document.write("                              <th>100W以上</th>");
//   document.write("                              <td>40%</td>");
//   document.write("                              <td>有效會員人數30個</td>");
//   document.write("                            </tr>");
//   document.write("                          </tbody>");
//   document.write("                        </table>");
//   document.write("");
//   document.write("                      </div>");
//   document.write("");
//   document.write("                      <!--  -->");
//   document.write(
//     "                      <p class='text-theme centerCenter h5 font-weight-bold'>獎金無上限</p>"
//   );
//   document.write(
//     "                      <p class=' centerCenter'>若是想洽談其他的方式進行代理請 <button type='button'"
//   );
//   document.write(
//     "                          class='uk-button bg-transparent text-theme centerCenter px-0 py-1' data-toggle='modal'"
//   );
//   document.write(
//     "                          data-target='#exampleModalCenter2'>"
//   );
//   document.write("                          聯繫客服");
//   document.write("                        </button></p>");
//   document.write("                      <!--  -->");
//   document.write("                      <div class='row px-3 py-2'>");
//   document.write("                        <div class=''>");
//   document.write(
//     "                          <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>1</div>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='col'>");
//   document.write(
//     "                          <p class=''>統計周期為自然月的00:00:00-23:59:59。</p>"
//   );
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='row px-3 py-2'>");
//   document.write("                        <div class=''>");
//   document.write(
//     "                          <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>2</div>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='col'>");
//   document.write(
//     "                          <p class=''>退傭計算為下線的會員總負盈利值，若當月會員總輸贏值為正，將累計到下個月並扣除上月的正盈利值，直到總輸贏值為負且符合有效會員人數，即可啟動退傭模式。</p>"
//   );
//   document.write("                          <p class=''>舉例:</p>");
//   document.write("                          <p class=''>");
//   document.write(
//     "                            A代理下線3月總輸贏值為-150000，優惠領取2000，洗碼2000，計算退傭方式為150000*0.25-2000-2000，故實得傭金為33500B代理下線3月總輸贏值為+300000，優惠領取5000，洗碼2000，4月總輸贏值為-500000，優惠領取5000，洗碼2000，計算退傭方式為500000-300000=200000(對應退傭比例為25%)，故200000*0.25-3月優惠7000-4月優惠7000=50000-7000-7000=36000為實得傭金。"
//   );
//   document.write("                          </p>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='row px-3 py-2'>");
//   document.write("                        <div class=''>");
//   document.write(
//     "                          <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>3</div>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='col'>");
//   document.write(
//     "                          <p class=''>有效會員人數定義為當月有效投注額滿5萬，為一個有效會員人數。"
//   );
//   document.write("                          </p>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                      <div class='row px-3 py-2'>");
//   document.write("                        <div class=''>");
//   document.write(
//     "                          <div class='ac text-center p-0 text-light rounded rounded-circle mr-2'>4</div>"
//   );
//   document.write("                        </div>");
//   document.write("                        <div class='col'>");
//   document.write(
//     "                          <p class=''>同IP、電話、銀行卡進行多帳號投注或是註冊不同帳號，會視為1個有效會員。"
//   );
//   document.write("                          </p>");
//   document.write("                        </div>");
//   document.write("                      </div>");
//   document.write("                    </li>");
//   document.write("                    <li class='px-4 '>");
//   document.write(
//     "                      <ul uk-accordion='' class='uk-accordion' id='FAQ'>"
//   );
//   document.write("                        <li class='uk-open pt-3'>");
//   document.write(
//     "                          <a class='uk-accordion-title' href='#'>如何查詢流水</a>"
//   );
//   document.write(
//     "                          <div class=' uk-accordion-content m-0'>"
//   );
//   document.write(
//     "                            <p class=' '>電腦版，點擊上方會員選單&gt;進會員中心頁&gt;選擇要查詢的期間&gt;點擊搜尋，即可查詢各廳流水</p>"
//   );
//   document.write(
//     "                            <p class=' '>手機版，點擊右下方我的&gt;投注紀錄&gt;選擇要查詢的期間&gt;點擊搜尋，即可查詢各廳流水</p>"
//   );
//   document.write(
//     "                            <p class=' '>※流水最多查詢15天</p>"
//   );
//   document.write("                          </div>");
//   document.write("                        </li>");
//   document.write("                        <li>");
//   document.write(
//     "                          <a class='uk-accordion-title' href='#'>怎樣在手機允許第三方cookies？</a>"
//   );
//   document.write(
//     "                          <div class=' uk-accordion-content m-0' hidden=''>"
//   );
//   document.write(
//     "                            <p class=' '>電腦版，點擊上方會員選單&gt;進會員中心頁&gt;選擇要查詢的期間&gt;點擊搜尋，即可查詢各廳流水</p>"
//   );
//   document.write(
//     "                            <p class=' '>手機版，點擊右下方我的&gt;投注紀錄&gt;選擇要查詢的期間&gt;點擊搜尋，即可查詢各廳流水</p>"
//   );
//   document.write(
//     "                            <p class=' '>※流水最多查詢15天</p>"
//   );
//   document.write("                          </div>");
//   document.write("                        </li>");
//   document.write("                        <li>");
//   document.write(
//     "                          <a class='uk-accordion-title' href='#'>怎樣清除手機緩存？</a>"
//   );
//   document.write(
//     "                          <div class=' uk-accordion-content m-0' hidden=''>"
//   );
//   document.write(
//     "                            <p class=' '>電腦版，點擊上方會員選單&gt;進會員中心頁&gt;選擇要查詢的期間&gt;點擊搜尋，即可查詢各廳流水</p>"
//   );
//   document.write(
//     "                            <p class=' '>手機版，點擊右下方我的&gt;投注紀錄&gt;選擇要查詢的期間&gt;點擊搜尋，即可查詢各廳流水</p>"
//   );
//   document.write(
//     "                            <p class=' '>※流水最多查詢15天</p>"
//   );
//   document.write("                          </div>");
//   document.write("                        </li>");
//   document.write("                        <li>");
//   document.write(
//     "                          <a class='uk-accordion-title' href='#'>推薦金優惠介紹</a>"
//   );
//   document.write(
//     "                          <div class=' uk-accordion-content m-0' hidden=''>"
//   );
//   document.write(
//     "                            <p class=' '>電腦版，點擊上方會員選單&gt;進會員中心頁&gt;選擇要查詢的期間&gt;點擊搜尋，即可查詢各廳流水</p>"
//   );
//   document.write(
//     "                            <p class=' '>手機版，點擊右下方我的&gt;投注紀錄&gt;選擇要查詢的期間&gt;點擊搜尋，即可查詢各廳流水</p>"
//   );
//   document.write(
//     "                            <p class=' '>※流水最多查詢15天</p>"
//   );
//   document.write("                          </div>");
//   document.write("                        </li>");
//   document.write("                        <li>");
//   document.write(
//     "                          <a class='uk-accordion-title' href='#'>支付方式流程教學</a>"
//   );
//   document.write(
//     "                          <div class=' uk-accordion-content m-0' hidden=''>"
//   );
//   document.write(
//     "                            <p class=' '>電腦版，點擊上方會員選單&gt;進會員中心頁&gt;選擇要查詢的期間&gt;點擊搜尋，即可查詢各廳流水</p>"
//   );
//   document.write(
//     "                            <p class=' '>手機版，點擊右下方我的&gt;投注紀錄&gt;選擇要查詢的期間&gt;點擊搜尋，即可查詢各廳流水</p>"
//   );
//   document.write(
//     "                            <p class=' '>※流水最多查詢15天</p>"
//   );
//   document.write("                          </div>");
//   document.write("                        </li>");
//   document.write("                      </ul>");
//   document.write("                    </li>");
//   document.write("");
//   document.write("                  </ul>");
//   document.write("                </div>");
//   document.write("              </li>");
//   document.write("");
//   document.write("");
//   document.write("");
//   document.write("            </ul>");
//   document.write("          </div>");
//   document.write("");
//   document.write("        </div>");
//   document.write("      </div>");
//   document.write("    </div>");
//   document.write("    <!-- 0service Modal 聯繫克服 -->");
//   document.write(
//     "    <div class='modal fade' id='exampleModalCenter2' tabindex='-1' role='dialog'"
//   );
//   document.write(
//     "      aria-labelledby='exampleModalCenterTitle2' aria-hidden='true'>"
//   );
//   document.write(
//     "      <div class='modal-dialog modal-dialog-centered' role='document'>"
//   );
//   document.write("        <div class='modal-content'>");
//   document.write("          <div class='modal-header border-0'>");
//   document.write(
//     "            <h5 class='modal-title h5 text-theme font-weight-bold' id='exampleModalLongTitle'>聯絡我們"
//   );
//   document.write("            </h5>");
//   document.write(
//     "            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
//   );
//   document.write(
//     "              <span aria-hidden='true'><i class='fa-solid fa-xmark text-theme fa-lg'></i></span>"
//   );
//   document.write("            </button>");
//   document.write("          </div>");
//   document.write("          <div class='modal-body pt-0'>");
//   document.write("            <!-- 雙直btn -->");
//   document.write("            <div class=' py-2'>");
//   document.write(
//     "              <button type='button' class='btn bg-transparent p-0'>"
//   );
//   document.write(
//     "                <img src='../img/桌機index_img/Frame 554.png' class='img-fluid' alt='...'>"
//   );
//   document.write("              </button>");
//   document.write("            </div>");
//   document.write("            <div class=' py-2'>");
//   document.write(
//     "              <button type='button' class='btn bg-transparent p-0'>"
//   );
//   document.write(
//     "                <img src='../img/桌機index_img/Frame 555.png' class='img-fluid' alt='...'>"
//   );
//   document.write("              </button>");
//   document.write("            </div>");
//   document.write("          </div>");
//   document.write("          <!-- <div class='modal-footer'>");
//   document.write(
//     "              <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>"
//   );
//   document.write(
//     "              <button type='button' class='btn btn-primary'>Save changes</button>"
//   );
//   document.write("            </div> -->");
//   document.write("        </div>");
//   document.write("      </div>");
//   document.write("    </div>");
//   document.write("");
//   document.write("    <!-- 真人M -->");
//   document.write(
//     "    <div class='modal fade' id='exampleModalCenter11' tabindex='-1' role='dialog'"
//   );
//   document.write(
//     "      aria-labelledby='exampleModalCenterTitle2' aria-hidden='true'>"
//   );
//   document.write(
//     "      <div class='modal-dialog modal-dialog-centered modal-lg' role='document'>"
//   );
//   document.write("        <div class='modal-content CardBgMd_txt_BG'>");
//   document.write("          <div class='modal-header border-0'>");
//   document.write(
//     "            <h5 class='modal-title font-weight-bold' id='exampleModalLongTitle'>共計2筆投注，投注金額200.00 有效投注"
//   );
//   document.write("              100.00<span class='text-theme2'>輸/贏");
//   document.write("                200.00</span>");
//   document.write("            </h5>");
//   document.write(
//     "            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
//   );
//   document.write(
//     "              <span aria-hidden='true'><i class='fa-solid fa-xmark text-theme fa-lg'></i></span>"
//   );
//   document.write("            </button>");
//   document.write("          </div>");
//   document.write("          <div class='modal-body pt-0'>");
//   document.write("            <div class='col-12 mb-3'>");
//   document.write("              <div class='table-responsive py-3 table_set'>");
//   document.write("");
//   document.write("                <table class='table table-striped'>");
//   document.write("                  <thead>");
//   document.write("                    <tr class='text-center'>");
//   document.write("                      <th scope='col'>日期</th>");
//   document.write("                      <th scope='col'>平台</th>");
//   document.write("                      <th scope='col'>投注金額</th>");
//   document.write("                      <th scope='col'>有效投注</th>");
//   document.write("                      <th scope='col'>輸/贏</th>");
//   document.write("                    </tr>");
//   document.write("                  </thead>");
//   document.write("                  <tbody>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>真人遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("");
//   document.write("                  </tbody>");
//   document.write("                </table>");
//   document.write("              </div>");
//   document.write("              <!-- 頁碼 -->");
//   document.write("              <div class='text-center p-2'>");
//   document.write(
//     "                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                <style>");
//   document.write("                  .btn-active:hover {");
//   document.write("                    color: #365a97;");
//   document.write("                    border-color: #365a97 !important;");
//   document.write("                    font-size: 1.1rem;");
//   document.write("                  }");
//   document.write("                </style>");
//   document.write("              </div>");
//   document.write("");
//   document.write("            </div>");
//   document.write("          </div>");
//   document.write("          <!-- <div class='modal-footer'>");
//   document.write(
//     "                  <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>"
//   );
//   document.write(
//     "                  <button type='button' class='btn btn-primary'>Save changes</button>"
//   );
//   document.write("                </div> -->");
//   document.write("        </div>");
//   document.write("      </div>");
//   document.write("    </div>");
//   document.write("    <!-- 體育M -->");
//   document.write(
//     "    <div class='modal fade' id='exampleModalCenter12' tabindex='-1' role='dialog'"
//   );
//   document.write(
//     "      aria-labelledby='exampleModalCenterTitle2' aria-hidden='true'>"
//   );
//   document.write(
//     "      <div class='modal-dialog modal-dialog-centered modal-lg' role='document'>"
//   );
//   document.write("        <div class='modal-content CardBgMd_txt_BG'>");
//   document.write("          <div class='modal-header border-0'>");
//   document.write(
//     "            <h5 class='modal-title font-weight-bold' id='exampleModalLongTitle'>共計2筆投注，投注金額200.00 有效投注"
//   );
//   document.write("              100.00<span class='text-theme2'>輸/贏");
//   document.write("                200.00</span>");
//   document.write("            </h5>");
//   document.write(
//     "            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
//   );
//   document.write(
//     "              <span aria-hidden='true'><i class='fa-solid fa-xmark text-theme fa-lg'></i></span>"
//   );
//   document.write("            </button>");
//   document.write("          </div>");
//   document.write("          <div class='modal-body pt-0'>");
//   document.write("            <div class='col-12 mb-3'>");
//   document.write("              <div class='table-responsive py-3 table_set'>");
//   document.write("");
//   document.write("                <table class='table table-striped'>");
//   document.write("                  <thead>");
//   document.write("                    <tr class='text-center'>");
//   document.write("                      <th scope='col'>日期</th>");
//   document.write("                      <th scope='col'>平台</th>");
//   document.write("                      <th scope='col'>投注金額</th>");
//   document.write("                      <th scope='col'>有效投注</th>");
//   document.write("                      <th scope='col'>輸/贏</th>");
//   document.write("                    </tr>");
//   document.write("                  </thead>");
//   document.write("                  <tbody>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>體育遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("");
//   document.write("                  </tbody>");
//   document.write("                </table>");
//   document.write("              </div>");
//   document.write("              <!-- 頁碼 -->");
//   document.write("              <div class='text-center p-2'>");
//   document.write(
//     "                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                <style>");
//   document.write("                  .btn-active:hover {");
//   document.write("                    color: #365a97;");
//   document.write("                    border-color: #365a97 !important;");
//   document.write("                    font-size: 1.1rem;");
//   document.write("                  }");
//   document.write("                </style>");
//   document.write("              </div>");
//   document.write("");
//   document.write("            </div>");
//   document.write("          </div>");
//   document.write("          <!-- <div class='modal-footer'>");
//   document.write(
//     "                  <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>"
//   );
//   document.write(
//     "                  <button type='button' class='btn btn-primary'>Save changes</button>"
//   );
//   document.write("                </div> -->");
//   document.write("        </div>");
//   document.write("      </div>");
//   document.write("    </div>");
//   document.write("    <!-- 賓果M -->");
//   document.write(
//     "    <div class='modal fade' id='exampleModalCenter13' tabindex='-1' role='dialog'"
//   );
//   document.write(
//     "      aria-labelledby='exampleModalCenterTitle2' aria-hidden='true'>"
//   );
//   document.write(
//     "      <div class='modal-dialog modal-dialog-centered modal-lg' role='document'>"
//   );
//   document.write("        <div class='modal-content CardBgMd_txt_BG'>");
//   document.write("          <div class='modal-header border-0'>");
//   document.write(
//     "            <h5 class='modal-title font-weight-bold' id='exampleModalLongTitle'>共計2筆投注，投注金額200.00 有效投注"
//   );
//   document.write("              100.00<span class='text-theme2'>輸/贏");
//   document.write("                200.00</span>");
//   document.write("            </h5>");
//   document.write(
//     "            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
//   );
//   document.write(
//     "              <span aria-hidden='true'><i class='fa-solid fa-xmark text-theme fa-lg'></i></span>"
//   );
//   document.write("            </button>");
//   document.write("          </div>");
//   document.write("          <div class='modal-body pt-0'>");
//   document.write("            <div class='col-12 mb-3'>");
//   document.write("              <div class='table-responsive py-3 table_set'>");
//   document.write("");
//   document.write("                <table class='table table-striped'>");
//   document.write("                  <thead>");
//   document.write("                    <tr class='text-center'>");
//   document.write("                      <th scope='col'>日期</th>");
//   document.write("                      <th scope='col'>平台</th>");
//   document.write("                      <th scope='col'>投注金額</th>");
//   document.write("                      <th scope='col'>有效投注</th>");
//   document.write("                      <th scope='col'>輸/贏</th>");
//   document.write("                    </tr>");
//   document.write("                  </thead>");
//   document.write("                  <tbody>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>賓果/北京賽車</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("");
//   document.write("                  </tbody>");
//   document.write("                </table>");
//   document.write("              </div>");
//   document.write("              <!-- 頁碼 -->");
//   document.write("              <div class='text-center p-2'>");
//   document.write(
//     "                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                <style>");
//   document.write("                  .btn-active:hover {");
//   document.write("                    color: #365a97;");
//   document.write("                    border-color: #365a97 !important;");
//   document.write("                    font-size: 1.1rem;");
//   document.write("                  }");
//   document.write("                </style>");
//   document.write("              </div>");
//   document.write("");
//   document.write("            </div>");
//   document.write("          </div>");
//   document.write("          <!-- <div class='modal-footer'>");
//   document.write(
//     "              <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>"
//   );
//   document.write(
//     "              <button type='button' class='btn btn-primary'>Save changes</button>"
//   );
//   document.write("            </div> -->");
//   document.write("        </div>");
//   document.write("      </div>");
//   document.write("    </div>");
//   document.write("    <!-- 電子M -->");
//   document.write(
//     "    <div class='modal fade' id='exampleModalCenter14' tabindex='-1' role='dialog'"
//   );
//   document.write(
//     "      aria-labelledby='exampleModalCenterTitle2' aria-hidden='true'>"
//   );
//   document.write(
//     "      <div class='modal-dialog modal-dialog-centered modal-lg' role='document'>"
//   );
//   document.write("        <div class='modal-content CardBgMd_txt_BG'>");
//   document.write("          <div class='modal-header border-0'>");
//   document.write(
//     "            <h5 class='modal-title font-weight-bold' id='exampleModalLongTitle'>共計2筆投注，投注金額200.00 有效投注"
//   );
//   document.write("              100.00<span class='text-theme2'>輸/贏");
//   document.write("                200.00</span>");
//   document.write("            </h5>");
//   document.write(
//     "            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
//   );
//   document.write(
//     "              <span aria-hidden='true'><i class='fa-solid fa-xmark text-theme fa-lg'></i></span>"
//   );
//   document.write("            </button>");
//   document.write("          </div>");
//   document.write("          <div class='modal-body pt-0'>");
//   document.write("            <div class='col-12 mb-3'>");
//   document.write("              <div class='table-responsive py-3 table_set'>");
//   document.write("");
//   document.write("                <table class='table table-striped'>");
//   document.write("                  <thead>");
//   document.write("                    <tr class='text-center'>");
//   document.write("                      <th scope='col'>日期</th>");
//   document.write("                      <th scope='col'>平台</th>");
//   document.write("                      <th scope='col'>投注金額</th>");
//   document.write("                      <th scope='col'>有效投注</th>");
//   document.write("                      <th scope='col'>輸/贏</th>");
//   document.write("                    </tr>");
//   document.write("                  </thead>");
//   document.write("                  <tbody>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>電子遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("");
//   document.write("                  </tbody>");
//   document.write("                </table>");
//   document.write("              </div>");
//   document.write("              <!-- 頁碼 -->");
//   document.write("              <div class='text-center p-2'>");
//   document.write(
//     "                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                <style>");
//   document.write("                  .btn-active:hover {");
//   document.write("                    color: #365a97;");
//   document.write("                    border-color: #365a97 !important;");
//   document.write("                    font-size: 1.1rem;");
//   document.write("                  }");
//   document.write("                </style>");
//   document.write("              </div>");
//   document.write("");
//   document.write("            </div>");
//   document.write("          </div>");
//   document.write("          <!-- <div class='modal-footer'>");
//   document.write(
//     "              <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>"
//   );
//   document.write(
//     "              <button type='button' class='btn btn-primary'>Save changes</button>"
//   );
//   document.write("            </div> -->");
//   document.write("        </div>");
//   document.write("      </div>");
//   document.write("    </div>");
//   document.write("    <!-- 棋牌M -->");
//   document.write(
//     "    <div class='modal fade' id='exampleModalCenter15' tabindex='-1' role='dialog'"
//   );
//   document.write(
//     "      aria-labelledby='exampleModalCenterTitle2' aria-hidden='true'>"
//   );
//   document.write(
//     "      <div class='modal-dialog modal-dialog-centered modal-lg' role='document'>"
//   );
//   document.write("        <div class='modal-content CardBgMd_txt_BG'>");
//   document.write("          <div class='modal-header border-0'>");
//   document.write(
//     "            <h5 class='modal-title font-weight-bold' id='exampleModalLongTitle'>共計2筆投注，投注金額200.00 有效投注"
//   );
//   document.write("              100.00<span class='text-theme2'>輸/贏");
//   document.write("                200.00</span>");
//   document.write("            </h5>");
//   document.write(
//     "            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
//   );
//   document.write(
//     "              <span aria-hidden='true'><i class='fa-solid fa-xmark text-theme fa-lg'></i></span>"
//   );
//   document.write("            </button>");
//   document.write("          </div>");
//   document.write("          <div class='modal-body pt-0'>");
//   document.write("            <div class='col-12 mb-3'>");
//   document.write("              <div class='table-responsive py-3 table_set'>");
//   document.write("");
//   document.write("                <table class='table table-striped'>");
//   document.write("                  <thead>");
//   document.write("                    <tr class='text-center'>");
//   document.write("                      <th scope='col'>日期</th>");
//   document.write("                      <th scope='col'>平台</th>");
//   document.write("                      <th scope='col'>投注金額</th>");
//   document.write("                      <th scope='col'>有效投注</th>");
//   document.write("                      <th scope='col'>輸/贏</th>");
//   document.write("                    </tr>");
//   document.write("                  </thead>");
//   document.write("                  <tbody>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>棋牌遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("");
//   document.write("                  </tbody>");
//   document.write("                </table>");
//   document.write("              </div>");
//   document.write("              <!-- 頁碼 -->");
//   document.write("              <div class='text-center p-2'>");
//   document.write(
//     "                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                <style>");
//   document.write("                  .btn-active:hover {");
//   document.write("                    color: #365a97;");
//   document.write("                    border-color: #365a97 !important;");
//   document.write("                    font-size: 1.1rem;");
//   document.write("                  }");
//   document.write("                </style>");
//   document.write("              </div>");
//   document.write("");
//   document.write("            </div>");
//   document.write("          </div>");
//   document.write("          <!-- <div class='modal-footer'>");
//   document.write(
//     "              <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>"
//   );
//   document.write(
//     "              <button type='button' class='btn btn-primary'>Save changes</button>"
//   );
//   document.write("            </div> -->");
//   document.write("        </div>");
//   document.write("      </div>");
//   document.write("    </div>");
//   document.write("    <!-- 捕魚M -->");
//   document.write(
//     "    <div class='modal fade' id='exampleModalCenter16' tabindex='-1' role='dialog'"
//   );
//   document.write(
//     "      aria-labelledby='exampleModalCenterTitle2' aria-hidden='true'>"
//   );
//   document.write(
//     "      <div class='modal-dialog modal-dialog-centered modal-lg' role='document'>"
//   );
//   document.write("        <div class='modal-content CardBgMd_txt_BG'>");
//   document.write("          <div class='modal-header border-0'>");
//   document.write(
//     "            <h5 class='modal-title font-weight-bold' id='exampleModalLongTitle'>共計2筆投注，投注金額200.00 有效投注"
//   );
//   document.write("              100.00<span class='text-theme2'>輸/贏");
//   document.write("                200.00</span>");
//   document.write("            </h5>");
//   document.write(
//     "            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
//   );
//   document.write(
//     "              <span aria-hidden='true'><i class='fa-solid fa-xmark text-theme fa-lg'></i></span>"
//   );
//   document.write("            </button>");
//   document.write("          </div>");
//   document.write("          <div class='modal-body pt-0'>");
//   document.write("            <div class='col-12 mb-3'>");
//   document.write("              <div class='table-responsive py-3 table_set'>");
//   document.write("");
//   document.write("                <table class='table table-striped'>");
//   document.write("                  <thead>");
//   document.write("                    <tr class='text-center'>");
//   document.write("                      <th scope='col'>日期</th>");
//   document.write("                      <th scope='col'>平台</th>");
//   document.write("                      <th scope='col'>投注金額</th>");
//   document.write("                      <th scope='col'>有效投注</th>");
//   document.write("                      <th scope='col'>輸/贏</th>");
//   document.write("                    </tr>");
//   document.write("                  </thead>");
//   document.write("                  <tbody>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("                    <tr class='text-center text-secondary'>");
//   document.write("                      <th>2022-04-21</th>");
//   document.write("                      <td>捕魚遊戲</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td>100.00</td>");
//   document.write("                      <td class='text-theme2'>100.00</td>");
//   document.write("                    </tr>");
//   document.write("");
//   document.write("                  </tbody>");
//   document.write("                </table>");
//   document.write("              </div>");
//   document.write("              <!-- 頁碼 -->");
//   document.write("              <div class='text-center p-2'>");
//   document.write(
//     "                <div class='btn btn-active'><i class='fas fa-caret-left'></i></div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>1</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>2</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>3</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>4</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active btn-sm border-secondary mx-1'>5</div>"
//   );
//   document.write(
//     "                <div class='btn btn-active'><i class='fas fa-caret-right'></i></div>"
//   );
//   document.write("                <style>");
//   document.write("                  .btn-active:hover {");
//   document.write("                    color: #365a97;");
//   document.write("                    border-color: #365a97 !important;");
//   document.write("                    font-size: 1.1rem;");
//   document.write("                  }");
//   document.write("                </style>");
//   document.write("              </div>");
//   document.write("");
//   document.write("            </div>");
//   document.write("          </div>");
//   document.write("          <!-- <div class='modal-footer'>");
//   document.write(
//     "              <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>"
//   );
//   document.write(
//     "              <button type='button' class='btn btn-primary'>Save changes</button>"
//   );
//   document.write("            </div> -->");
//   document.write("        </div>");
//   document.write("      </div>");
//   document.write("    </div>");
//   document.write("  </div>");
// }

// table
function table() {
  document.writeln(" <table class='table table-striped p-2 pb-5 m-0'>");
  document.writeln("        <thead>");
  document.writeln("          <tr class='text-center bg-theme3 text-light'>");
  document.writeln("            <th scope='' class='col-6'>標題</th>");
  document.writeln("            <th scope='' class='col-6'>時間</th>");
  document.writeln("          </tr>");
  document.writeln("        </thead>");
  document.writeln("        <tbody>");
  document.writeln("          <tr class='text-center'>");
  document.writeln("            <th>百家樂教學 | 北京暴雨！</th>");
  document.writeln("            <td>2022/04/27</td>");
  document.writeln("          </tr>");
  document.writeln("          <tr class='text-center'>");
  document.writeln("            <th>百家樂教學 | 北京暴雨！</th>");
  document.writeln("            <td>2022/04/27</td>");
  document.writeln("          </tr>");
  document.writeln("          <tr class='text-center'>");
  document.writeln("            <th>百家樂教學 | 北京暴雨！</th>");
  document.writeln("            <td>2022/04/27</td>");
  document.writeln("          </tr>");
  document.writeln("          <tr class='text-center'>");
  document.writeln("            <th>百家樂教學 | 北京暴雨！</th>");
  document.writeln("            <td>2022/04/27</td>");
  document.writeln("          </tr>");
  document.writeln("          <tr class='text-center'>");
  document.writeln("            <th>百家樂教學 | 北京暴雨！</th>");
  document.writeln("            <td>2022/04/27</td>");
  document.writeln("          </tr>");
  document.writeln("          <tr class='text-center'>");
  document.writeln("            <th>百家樂教學 | 北京暴雨！</th>");
  document.writeln("            <td>2022/04/27</td>");
  document.writeln("          </tr>");
  document.writeln("        </tbody>");
  document.writeln("      </table>");
}

// 登入頁面
function indexLogin() {
  document.writeln("  <link rel='stylesheet' href='../css/scrollbar.css'>");
  document.writeln("<!-- 右側中 -->");
  document.writeln(
    "  <div class='uk-position-fixed uk-position-center-right btn-fixed d-none d-md-block'"
  );
  document.writeln(
    "    style='width: 5rem; height: auto;margin-top: -50px;z-index: 99999999999;'>"
  );
  document.writeln(
    "    <button type='button' class='uk-button bg-transparent  centerCenter px-0 py-1' data-toggle='modal'"
  );
  document.writeln("      data-target='#exampleModalCenter2'>");
  document.writeln(
    "      <img src='../img/桌機index_img/0service.png' class='img-fluid' alt=''>"
  );
  document.writeln("    </button>");
  document.writeln(
    "    <a href='../page/HelpCenter.html' class='uk-button bg-transparent  centerCenter px-0 py-1'>"
  );
  document.writeln(
    "      <img src='../img/桌機index_img/2help.png' class='img-fluid' alt=''>"
  );
  document.writeln("    </a>");
  document.writeln(
    "    <a href='../header page/3FAQ.html' class='uk-button bg-transparent  centerCenter px-0 py-1'>"
  );
  document.writeln(
    "      <img src='../img/桌機index_img/1announcement.png' class='img-fluid' alt=''>"
  );
  document.writeln("    </a>");
  document.writeln("  </div>");
  document.writeln("<div class='position-fixed fixed-top'>");
  document.writeln("    <!--  -->");
  document.writeln(
    "    <div class='container-fluid d-none d-md-block p-0 bg-theme3'>"
  );
  document.writeln("      <div class='container-lg clearfix'>");
  document.writeln(
    "        <div class='row m-0 p-0 text-right float-right align-items-center'>"
  );
  document.writeln(
    "          <a href='../page/MyPursePage.html' class='col m-0 p-0 px-2'>"
  );
  document.writeln(
    "            <img src='../img/桌機index_img/header/1.png' class='img-fluid' alt=''>"
  );
  document.writeln("            <span class='text-white'>我的錢包</span>");
  document.writeln("          </a>");
  document.writeln(
    "          <a href='../page/bettingHistory.html' class='col m-0 p-0 px-2'>"
  );
  document.writeln(
    "            <img src='../img/桌機index_img/header/2.png' class='img-fluid' alt=''>"
  );
  document.writeln("            <span class='text-white'>投注紀錄</span>");
  document.writeln("          </a>");
  document.writeln(
    "          <a href='../page/transactionRecord.html' class='col m-0 p-0 px-2'>"
  );
  document.writeln(
    "            <img src='../img/桌機index_img/header/3.png' class='img-fluid' alt=''>"
  );
  document.writeln("            <span class='text-white'>交易紀錄</span>");
  document.writeln("          </a>");
  document.writeln(
    "          <a href='../page/AccountManagement.html' class='col m-0 p-0 px-2'>"
  );
  document.writeln(
    "            <img src='../img/桌機index_img/header/4.png' class='img-fluid' alt=''>"
  );
  document.writeln("            <span class='text-white'>帳戶管理</span>");
  document.writeln("          </a>");
  document.writeln(
    "          <a href='../page/personalInformation.html' class='col m-0 p-0 px-2'>"
  );
  document.writeln(
    "            <img src='../img/桌機index_img/header/5.png' class='img-fluid' alt=''>"
  );
  document.writeln("            <span class='text-white'>會員中心</span>");
  document.writeln("          </a>");
  document.writeln(
    "          <a href='../header page/3FAQ.html' class=''><img class='img-fluid pl-5' src='../img/桌機index_img/header/7.png'"
  );
  document.writeln("              alt=''></a>");
  document.writeln("          <a href='../index.html'");
  document.writeln(
    "            class=' m-0 p-0 text-white border border-white rounded px-2 mx-2 my-1 text-decoration-none'>"
  );
  document.writeln(
    "            <!-- <img src='../img/桌機index_img/header/6.png' class='img-fluid pl-2' alt=''> -->"
  );
  document.writeln("            登出");
  document.writeln("          </a>");
  document.writeln("");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("    <!-- login ------------------------------------>");
  document.writeln(
    "    <div class='container-fluid  d-none d-md-block p-0 bg-gradient-theme uk-position-relative'>"
  );
  document.writeln("      <div class='container-lg'>");
  document.writeln("        <div class='row align-items-center'>");
  document.writeln(
    "          <a href='../index.html' class='col-2 px-0 text-center'>"
  );
  document.writeln(
    "            <img src='../img/桌機index_img/logo.png' class='img-fluid px-2' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln(
    "          <div class='col-6 px-0 d-inline-flex align-items-center'>"
  );
  document.writeln("            <div class='btn-group'>");
  document.writeln("              <div class='btn py-0 px-1 px-lg-2 my-auto'>");
  document.writeln("                <p class='font_b line_ss'>");
  document.writeln("                  首頁");
  document.writeln("                </p>");
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList '>"
  );
  document.writeln("                <!-- 使用藍底線 -->");
  document.writeln("                <!-- <p class='line_ss'>");
  document.writeln("                          真人");
  document.writeln(
    "                          <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("                        </p> -->");
  document.writeln("                <span>真人</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>體育</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>賓果</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>電子</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>棋牌</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>捕魚</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <a href='../page/Promotion.html' class='btn py-0 px-1 px-lg-2 my-auto hoverList'>"
  );
  document.writeln("                <span>優惠</span>");
  document.writeln(
    "                <img src='../img/桌機index_img/headerArrow.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </a>");
  document.writeln("            </div>");
  document.writeln("          </div>");
  document.writeln("          <div class='col-4 px-0' id='drw'>");
  document.writeln("");
  document.writeln(
    "            <div class='row btn-group centerCenter p-0 m-0'>"
  );
  document.writeln("              <div class='col-5 p-0 d-flex pr-2'>");
  document.writeln(
    "                <a href='../page/deposit.html' class='centerCenter px-0'>"
  );
  document.writeln(
    "                  <img src='../img/桌機index_img/header/9.png' class='img-fluid' alt=''>"
  );
  document.writeln("                </a>");
  document.writeln(
    "                <a href='../page/withdrawal.html' class='centerCenter px-0'>"
  );
  document.writeln(
    "                  <img src='../img/桌機index_img/header/10.png' class='img-fluid' alt=''>"
  );
  document.writeln("                </a>");
  document.writeln(
    "                <a href='../page/PlatformTransfer.html' class='centerCenter px-0'>"
  );
  document.writeln(
    "                  <img src='../img/桌機index_img/header/11.png' class='img-fluid' alt=''>"
  );
  document.writeln("                </a>");
  document.writeln("              </div>");
  document.writeln("              <div class='col-2 p-0'>");
  document.writeln(
    "                <img src='../img/桌機index_img/user.png' class='img-fluid' alt=''>"
  );
  document.writeln("              </div>");
  document.writeln(
    "              <div class='col-5 p-0 pl-2' style='line-height: .6rem;'>"
  );
  document.writeln("                <div class='d-flex align-items-center'>");
  document.writeln(
    "                  <img src='../img/手機index_img/V1_1.png' class='img-fluid pl-1' alt=''>"
  );
  document.writeln("                  <p class=''>0987123654</p>");
  document.writeln("                </div>");
  document.writeln(
    "                <img src='../img/桌機index_img/header/8.png' class='img-fluid cursor_pointer' alt=''>"
  );
  document.writeln(
    "                <button class='uk-button bg-transparent p-0 m-0'><span class=''>$3,000.00</span><i"
  );
  document.writeln(
    "                    class='fa-solid fa-angle-down pl-1'></i></button>"
  );
  document.writeln("                <!-- MMC -->");
  document.writeln(
    "                <div uk-dropdown='mode: click;pos: bottom-center;' class='py-1 px-3 m-0 pb-3 dropdown-toggle arrow_up1'"
  );
  document.writeln(
    "                  style='background-color: rgba(0, 0, 0, 0.8); width: 16vw;z-index: 99999999999;'>"
  );
  document.writeln("                  <style>");
  document.writeln("                    .arrow_up1:before {");
  document.writeln(
    "                      border-bottom: .5rem solid rgba(0, 0, 0, .8);"
  );
  document.writeln(
    "                      border-left: .35rem solid transparent;"
  );
  document.writeln(
    "                      border-right: .35rem solid transparent;"
  );
  document.writeln("                      content: '';");
  document.writeln("                      position: absolute;");
  document.writeln("                      right: 3.95rem;");
  document.writeln("                      top: -.5rem;");
  document.writeln("                    }");
  document.writeln("                  </style>");
  document.writeln("                  <!-- MMC -->");
  document.writeln(
    "                  <div class=' py-3' style='height: 250px;overflow-y: scroll;overflow-x: hidden;'>"
  );
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>DG真人</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>歐博真人</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>SA真人</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>WM真人</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>OB真人</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>OG真人</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>SUPER體育</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>OB體育</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>SUPER彩票</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>9K彩票</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>DT電子</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>SP電子</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>RTG電子</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>BNG電子</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>必贏電子</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>PLAY電子</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>博樂棋牌</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>OB棋牌</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light border-bottom border-secondary'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>SP捕魚</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='row px-3 py-1 text-light'>"
  );
  document.writeln(
    "                      <div class='col px-0 border-right border-secondary py-0'>必贏捕魚</div>"
  );
  document.writeln(
    "                      <div class='col pl-2 text-theme5'>0</div>"
  );
  document.writeln("                    </div>");
  document.writeln("                  </div>");
  document.writeln(
    "                  <div class='row pt-3 border-top border-secondary'>"
  );
  document.writeln(
    "                    <div class='col text-right pl-2 text-theme5'>總額度:3,000.00</div>"
  );
  document.writeln("                  </div>");
  document.writeln(
    "                  <button class='btn bg-theme3 rounded rounded-pill py-1 my-1 btn-block text-light'>"
  );
  document.writeln("                    一鍵轉回");
  document.writeln("                  </button>");
  document.writeln("                </div>");
  document.writeln("                <!-- index 舊的 dropdown 3,000 -->");
  document.writeln(
    "                <!-- <div uk-dropdown='mode: click;pos: bottom-center;' class='py-1 px-0 m-0 pb-3 arrow_up1 bg-theme'"
  );
  document.writeln(
    "                  style='width: 250px;z-index: 99999999999;' id='UkBgc'>"
  );
  document.writeln("                  <style>");
  document.writeln("                    .arrow_up1:before {");
  document.writeln("                      border-bottom: .5rem solid #f1f8ff;");
  document.writeln(
    "                      border-left: .35rem solid transparent;"
  );
  document.writeln(
    "                      border-right: .35rem solid transparent;"
  );
  document.writeln("                      content: '';");
  document.writeln("                      position: absolute;");
  document.writeln("                      right: 3.95rem;");
  document.writeln("                      top: -.5rem;");
  document.writeln("                    }");
  document.writeln("                  </style>");
  document.writeln("                  <div class='row px-1 m-0'>");
  document.writeln(
    "                    <a href='../page/MyPurse.html' class='col centerCenter'>"
  );
  document.writeln(
    "                      <img src='../img/桌機index_img/list/clickList/a1.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    </a>");
  document.writeln(
    "                    <a href='../page/MyPurse.html' class='col centerCenter'>"
  );
  document.writeln(
    "                      <img src='../img/桌機index_img/list/clickList/a2.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    </a>");
  document.writeln(
    "                    <a href='../page/MyPurse.html' class='col centerCenter'>"
  );
  document.writeln(
    "                      <img src='../img/桌機index_img/list/clickList/a3.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    </a>");
  document.writeln("                  </div>");
  document.writeln(
    "                  <a href='../page/MyPurse.html' class=' dropdown-item px-3 fsz-12' type='button'>"
  );
  document.writeln(
    "                    <img src='../img/桌機index_img/list/clickList/PC/1.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    個人資料");
  document.writeln("                  </a>");
  document.writeln(
    "                  <a href='../page/MyPurse.html' class=' dropdown-item px-3 fsz-12' type='button'>"
  );
  document.writeln(
    "                    <img src='../img/桌機index_img/list/clickList/PC/2.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    VIP特權");
  document.writeln("                  </a>");
  document.writeln(
    "                  <a href='../page/MyPurse.html' class=' dropdown-item px-3 fsz-12' type='button'>"
  );
  document.writeln(
    "                    <img src='../img/桌機index_img/list/clickList/PC/3.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    優惠達標查詢");
  document.writeln("                  </a>");
  document.writeln(
    "                  <a href='../page/MyPurse.html' class=' dropdown-item px-3 fsz-12' type='button'>"
  );
  document.writeln(
    "                    <img src='../img/桌機index_img/list/clickList/PC/4.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    投注紀錄");
  document.writeln("                  </a>");
  document.writeln(
    "                  <a href='../page/MyPurse.html' class=' dropdown-item px-3 fsz-12' type='button'>"
  );
  document.writeln(
    "                    <img src='../img/桌機index_img/list/clickList/PC/5.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    交易紀錄");
  document.writeln("                  </a>");
  document.writeln(
    "                  <a href='../page/MyPurse.html' class=' dropdown-item px-3 fsz-12' type='button'>"
  );
  document.writeln(
    "                    <img src='../img/桌機index_img/list/clickList/PC/6.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    帳戶管理");
  document.writeln("                  </a>");
  document.writeln(
    "                  <a href='../page/inviteFriends.html' class=' dropdown-item px-3 fsz-12' type='button'>"
  );
  document.writeln(
    "                    <img src='../img/桌機index_img/list/clickList/PC/7.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    邀請好友");
  document.writeln("                  </a>");
  document.writeln(
    "                  <a href='../page/MyPurse.html' class='dropdown-item px-3 fsz-12 list-inline' type='button'>"
  );
  document.writeln("                    <div class='list-inline-item'>");
  document.writeln(
    "                      <img src='../img/桌機index_img/list/clickList/PC/8.png' class='img-fluid' alt=''>"
  );
  document.writeln("                    </div>");
  document.writeln(
    "                    <div class='list-inline-item' style='line-height: .6rem;'>"
  );
  document.writeln("                      <p class='py-0'>幫助中心</p>");
  document.writeln(
    "                      <p class='fsz-08 py-0 list-inline-item'>(存款、提款、投注)</p>"
  );
  document.writeln("                    </div>");
  document.writeln("                  </a>");
  document.writeln("                  <a href='../index.html'");
  document.writeln(
    "                    class='d-flex bg-theme2-hover  border btn px-3 my-3 py-0 w-75 justify-content-center mx-auto rounded-pill bd-theme text-theme'"
  );
  document.writeln("                    style='border-width: 5rem;'>");
  document.writeln("                    <p class='px-3 text-center'>登出</p>");
  document.writeln("                  </a>");
  document.writeln("                </div> -->");
  document.writeln("              </div>");
  document.writeln("            </div>");
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("");
  document.writeln("      <!-- hoveList -->");
  document.writeln(
    "      <div class='p-0' style='background-color: rgba(255, 255, 255, 0.5);'>"
  );
  document.writeln("        <div class='container-lg'>");
  document.writeln(
    "          <!--  <div class='row px-5 py-3 hoverListIItem uk-position-fixed uk-position-top-center bg-light'"
  );
  document.writeln(
    "                                style='top: 65px;z-index: 999999999999999999999;'> -->"
  );
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10035.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10036.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10037.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10038.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10039.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/baccarat/10040.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/sport/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/sport/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/bingo/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/bingo/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 py-3 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/3.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/4.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/5.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/slot/6.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/card/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/card/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("          <div class='row px-5 hoverListIItem'>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/fish/1.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <button class='uk-button bg-transparent py-1 px-2 col centerCenter' data-toggle='modal'"
  );
  document.writeln("              data-target='#exampleModalCenter'>");
  document.writeln(
    "              <img src='../img/桌機index_img/list/fish/2.png' class='' alt=''>"
  );
  document.writeln("            </button>");
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("");
  document.writeln("    <!--  uk-position-relative -->");
  document.writeln(
    "    <div class='container-fluid p-0 m-0 bgc-body-color d-none d-md-block marquee_bg border'>"
  );
  document.writeln("      <div class='container bgc-flex'>");
  document.writeln("        <div class='row p-0 m-0'>");
  document.writeln(
    "          <div class='text-center' style='padding-top: 0.1em;width: 12%;'>"
  );
  document.writeln("            <img");
  document.writeln(
    "              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAaCAYAAADSbo4CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXISURBVHgBrVZLbxtVFD53Hp44cRK7ScUzrd1EgqKqScSCgoQykWCdLtmRLhAqmzhCFMqmiUAUAW3SFSsU9xe0bGDBoqkQtEiV7ETpA7Wp3VSN82jwOHFsj2fuvZx7bcdjuw+acpSJx3fOPfc73/nOGQP8D8aTU8FC+nQYnsMUeE7Lzn02ZrfyJCG+ZH7tzBTs0gjs0jKXRsNq9wszvu695sr1O5BZWoYD774JvoD/mP+lEzF4RtsVI5s3Th71RfrieleX+fD2PVj6ax620g/h1i+/g1ssjT1tvyhjae3s2K6BxGfM4PbixIze0XlB0bUgcA4P4jd3ntu5PKzeuDtQSH839ORI2ihjbLqQ/t58ZiDrv42arw0NxxXDGBUAgHFkYV0e7rWNO0vAXDosga2cHbEf/HC0MRYnPMNFDA6n/jMQwUJ2/sRUa2/kEmh6mDOGOJgIh7pIN/kLYCUrJxlhnA5yFWZEV3l9iEPnQMTgzNy6f9p8KpC1Pz4a6D3ydlzv7IgqmiZCg2QDL5HR1urGI/dtrq0PyMw5WAg8WGxx6/Tg7zk5iyhnhYNKyIhY0/IrZ6IE+AgRmAQsxsr48I9uWibRdIFcnl/fZBzy/2w+EkjR2g7y5a/3W7YWM3ylUwrjUVye9PpQxs+rBEyicAFkXCHUHcDDTeB0CCgdwgxMzlyTu+4OCMkA45X7cmlKDdrwmr2dh22bhEKRcQsoj6F/cOv+V6bXx6H2RVliBmEBWhEncEpBXMx1CTCKcPHCT14HolyO6r29VXg8kFwBtzthySF1fhZxVEYGvD6hyIRFsDyYONmy+aAmDxVEE+RdCrlSAVwQZeLllfIDDrV7oZeK+QKtcphpPg22sVyrC7dFZaVAi0ATBhchSX8jYMr5nMK5ieoLa4xS0jhfSfV/RZj1xuUzkXXVXn//CBjtrZIxf2cb+Fr0usy3k5Mp3DUATeamOFfEvrDGsQSEQC1b/MIrh3PGPA8agFZ8jDY/6IYKzCmV9+B6oKsDFFlDqK5ZhEOwMQ5zmKVqBFQFOmVpOKkd4D2WOw6Itm3mhO+UzC054BYKoOpaLc+SC5qh1Xim1AKFNAEpo2HAiOhZ5nJUFsd+gqpoy2JlYM0vQH45XSuRnKhlARutLeUzHBeWF+4i6BJeNoLKw9K1W03QcZ/VjELok4kOAKkRYZIRIhMlVQZosQibt/4Gx7KgLbwPFKOlXEbcq2rqTrj1xWXIpjfA5/dBYbMArcEAJqSkPCcOYHkSjTAIV3BSy67Iaoh0R47VziHEkwlaYWUVx7YFgd4DYHR1yRqqWv1QLuVteQlTdRXb1pYMZG5+EUaGg5jhXCMQRYF+ISAEk8Jo7kVO2STh7oS250XLt/dlrnW/hBVjk1im1A6JRRuy129CbvGuLI+O2Xt14TXsHJSXI/fqFExBPZIeb3J05TAVWBJ1jZtf+iaJH2FRIn/Pl0pyygzSltIEOtW9K9QWA0KHD8HitTuQe5htih9566DV895PIXGfu3EiiZSHXUWJhA5+m6r65BY+7wcVEoJzt2iH6vmlDnDXwbZyJMDI+KzVd/zPKKr5GH5NednJzF+H9u5OeJT5/Mbl8mGffogjIIyMJLwgpBGIijFNOJsNDU5bdUAYql6q3y3V7ek7fjWG7TWMFJ6vgSmCP2A0gQh0d0DbnsAF6UN5RL6bGDvn9cnEo2E8bVTOK8JiYq0BiCsZEVejRY5fTfV9cmUUJ9U4algKUXMLcnh5ratnLzjF0uVKRAEi1XH4bMzro2vqCBPvNATpgH65CQhQNwG0NIsTaRYeY70fX5lWCBtEHSXsjQy8cmg/dlBZtP7OVtjzaregOiVhMIjpumM2xsCfACFSfpmfr5Zs17/ihd3+8Z2J9sj+U1owBNmVDHTt6+ZGiy/if+PMvSfty82NjyFXUZyhw1XQzwVEWPrXD8JGe+CC1h4IKkCmA/1T5562BzUixn2wCkLYvyRqQEF/Alk1AAAAAElFTkSuQmCC'"
  );
  document.writeln("              alt='...'>");
  document.writeln(
    "            <span class='font-weight-bold pl-1'>最新公告</span>"
  );
  document.writeln("          </div>");
  document.writeln("          <div class='' style='width: 80%;'>");
  document.writeln(
    "            <marquee direction='left' height='30' scrollamount='10' behavior='left' class=' h-100 pt-1'"
  );
  document.writeln(
    "              onmouseover='this.stop()' onmouseout='this.start()'>"
  );
  document.writeln(
    "              【維護公告0】 親愛的娛樂城會員您好，【幸運棋牌-維護通知】即刻起進行線路調整緊急維護，維護完成時間待定，造成不便敬請見諒    【存款公告】"
  );
  document.writeln(
    "              開通超商存款後以第一次繳費地點為綁定超商，若後續要更換繳費超商，請先提前告知與客服申請，否則導致造成資金損失風險需自行承擔，若為附近的超商地點繳費提前告知即可    【存款公告】"
  );
  document.writeln(
    "              敬愛的卡利會員您好，卡利娛樂城為防堵詐騙氾濫、保障會員資金安全，在此提醒：信用卡、ATM轉帳、VIP專用帳戶存款等服務，務必使用「本人帳戶」！若使用非本人帳戶存款，將一律扣除處理費用後退還本金，感謝您的配合。    【維護公告】"
  );
  document.writeln(
    "              親愛的會員您好，AV影城將於2020/12/14正式下架，造成不便敬請見諒。    【取款公告】"
  );
  document.writeln(
    "              親愛的卡利會員您好，由於體育注單會因改判賽事等因素，而進行注單重新結算，因此即日起，卡利娛樂城進行出款時，體育相關注單須全數派彩完畢才處理支付款項，若玩家手上有未派彩注單，麻煩您耐心等候，如有相關疑問、歡迎諮詢24H線上客服，謝謝您。"
  );
  document.writeln("            </marquee>");
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("");
  document.writeln("  </div>");
  document.writeln(
    "  <div class=' d-none d-md-block' style='margin-top: 130px;'></div>"
  );
  document.writeln("");
}

// 0service
function service() { 
  document.writeln("<!-- 0service Modal -->");
  document.writeln(
    "  <div class='modal fade' id='exampleModalCenter2' tabindex='-1' role='dialog'"
  );
  document.writeln(
    "    aria-labelledby='exampleModalCenterTitle2' aria-hidden='true'>"
  );
  document.writeln(
    "    <div class='modal-dialog modal-dialog-centered' role='document'>"
  );
  document.writeln("      <div class='modal-content'>");
  document.writeln("        <div class='modal-header border-0'>");
  document.writeln(
    "          <h5 class='modal-title h5 text-theme font-weight-bold' id='exampleModalLongTitle'>聯絡我們"
  );
  document.writeln("          </h5>");
  document.writeln(
    "          <button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
  );
  document.writeln(
    "            <span aria-hidden='true'><i class='fa-solid fa-xmark text-theme fa-lg'></i></span>"
  );
  document.writeln("          </button>");
  document.writeln("        </div>");
  document.writeln("        <div class='modal-body pt-0'>");
  document.writeln("          <!-- 雙直btn -->");
  document.writeln("          <div class=' py-2'>");
  document.writeln(
    "            <a type='button' class='uk-button bg-transparent p-0'>"
  );
  document.writeln(
    "              <img src='../img/桌機index_img/Frame 554.png' class='img-fluid' alt='...'>"
  );
  document.writeln("            </a>");
  document.writeln("          </div>");
  document.writeln("          <div class=' py-2'>");
  document.writeln(
    "            <a type='button' class='uk-button bg-transparent p-0'>"
  );
  document.writeln(
    "              <img src='../img/桌機index_img/Frame 555.png' class='img-fluid' alt='...'>"
  );
  document.writeln("            </a>");
  document.writeln("          </div>");
  document.writeln("          <div class=' py-2'>");
  document.writeln(
    "            <a href='../page/Feedback.html' class='uk-button bg-transparent p-0'>"
  );
  document.writeln(
    "              <img src='../img/桌機index_img/Frame 556.png' class='img-fluid' alt='...'>"
  );
  document.writeln("            </a>");
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("        <!-- <div class='modal-footer'>");
  document.writeln(
    "                <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>"
  );
  document.writeln(
    "                <button type='button' class='btn btn-primary'>Save changes</button>"
  );
  document.writeln("              </div> -->");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("  </div>");
}