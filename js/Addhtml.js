// page頁面 上方
function PageHeader() {
  document.writeln(
    "<!-- MD history.back ------------------------------------------------------------------------>"
  );
  document.writeln("      <div class=' w-100 py-1'>");
  document.writeln("        <nav aria-label='breadcrumb'>");
  document.writeln("          <ul class='d-flex py-0 py-sm-1'>");
  document.writeln(
    " <button class='btn py-2 uk-position-fixed uk-position-top-left' type='button' onclick='history.back()' value='回到上一頁' style='z-index: 999;top: 1%;'>"
  );
  document.writeln(
    "              <i class='fas fa-angle-left text-light fa-lg'></i>"
  );
  document.writeln("            </button>");
  document.writeln(
    "            <p class='text-light text-monospace col-12 text-center pt-1 font-weight-bold' style='font-size: 1.95rem;z-index: 2;'"
  );
  document.writeln("              id='copyTitle'>");
  document.writeln("            </p>");
  document.writeln("          </ul>");
  document.writeln("        </nav>");
  document.writeln("      </div>");
  document.writeln("      <script>");
  document.writeln("        $(document).ready(function () {");
  document.writeln("          let title = $('title').text();");
  document.writeln("          $('#copyTitle').html(title);");
  document.writeln("        });");
  document.writeln("      </script>");
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
    "              src='data:image/png;base64,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'"
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
function PageHeaderBanner() {}

// PC Footer
function PCFooter1() {
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
    "  <div id='footerHCopy' class='container-fluid  p-0 m-0 fixed-bottom  bgc-flex-v bg-transparent'"
  );
  document.writeln(
    "    style='background-image: url(../img/手機index_img/bgb1.png);'>"
  );
  document.writeln("    <div class='m-0 p-0 centerCenter container-sm'>");
  document.writeln("      <!--  -->");
  document.writeln(
    "      <div class='row m-0 p-0 py-1 d-none pb-3' id='indexFooterBtnItem'>"
  );
  document.writeln("        <div class='col-4 m-0 p-0'>");
  document.writeln("        </div>");
  document.writeln(
    "        <a class='col-4 centerCenter' href='../page/MyPurse1.html'>"
  );
  document.writeln(
    "          <img src='../img/手機index_img/bottomList/Frame 620.png' class='img-fluid' alt=''>"
  );
  document.writeln("        </a>");
  document.writeln(
    "        <a class='col-4 centerCenter' href='../page/MyPurse2.html'>"
  );
  document.writeln(
    "          <img src='../img/手機index_img/bottomList/Frame 621.png' class='img-fluid' alt=''>"
  );
  document.writeln("        </a>");
  document.writeln("      </div>");
  document.writeln("      <!--  -->");
  document.writeln("      <div class='row px-0 py-1 m-0'>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/Promotion.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb4.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/24H.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb3.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col centerCenter px-0 card_c' style='z-index: 99; margin-top: -45px;'>"
  );
  document.writeln("          <a href='../index.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb5.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <div id='indexFooterBtn' class='centerCenter'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb2.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/MyPurse.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/b1.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("  </div>");
  document.writeln("  <script src='../js/indexFooterBtn.js'></script>");
}

// MD Footer 優惠
function MDFooter1() {
  document.writeln(
    "<div id='indexFooterBtnItemBG' class='m-0 p-0 container-fluid d-none vh-100 fixed-bottom'"
  );
  document.writeln("    style='background-color: #000;opacity: .5;'></div>");
  document.writeln(
    "  <div id='footerHCopy' class='container-fluid  p-0 m-0 fixed-bottom  bgc-flex-v bg-transparent'"
  );
  document.writeln(
    "    style='background-image: url(../img/手機index_img/bgb1.png);'>"
  );
  document.writeln("    <div class='m-0 p-0 centerCenter container-sm'>");
  document.writeln("      <!--  -->");
  document.writeln(
    "      <div class='row m-0 p-0 py-1 d-none pb-3' id='indexFooterBtnItem'>"
  );
  document.writeln("        <div class='col-4 m-0 p-0'>");
  document.writeln("        </div>");
  document.writeln(
    "        <a class='col-4 centerCenter' href='../page/MyPurse1.html'>"
  );
  document.writeln(
    "          <img src='../img/手機index_img/bottomList/Frame 620.png' class='img-fluid' alt=''>"
  );
  document.writeln("        </a>");
  document.writeln(
    "        <a class='col-4 centerCenter' href='../page/MyPurse2.html'>"
  );
  document.writeln(
    "          <img src='../img/手機index_img/bottomList/Frame 621.png' class='img-fluid' alt=''>"
  );
  document.writeln("        </a>");
  document.writeln("      </div>");
  document.writeln("      <!--  -->");
  document.writeln("      <div class='row px-0 py-1 m-0'>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/Promotion.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/b4.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/24H.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb3.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col centerCenter px-0 card_c' style='z-index: 99; margin-top: -45px;'>"
  );
  document.writeln("          <a href='../index.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb5.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <div id='indexFooterBtn' class='centerCenter'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb2.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/MyPurse.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb1.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("  </div>");
  document.writeln("  <script src='../js/indexFooterBtn.js'></script>");
}

// MD Footer 客服
function MDFooter2() {
  document.writeln(
    "<div id='indexFooterBtnItemBG' class='m-0 p-0 container-fluid d-none vh-100 fixed-bottom'"
  );
  document.writeln("    style='background-color: #000;opacity: .5;'></div>");
  document.writeln(
    "  <div id='footerHCopy' class='container-fluid  p-0 m-0 fixed-bottom  bgc-flex-v bg-transparent'"
  );
  document.writeln(
    "    style='background-image: url(../img/手機index_img/bgb1.png);'>"
  );
  document.writeln("    <div class='m-0 p-0 centerCenter container-sm'>");
  document.writeln("      <!--  -->");
  document.writeln(
    "      <div class='row m-0 p-0 py-1 d-none pb-3' id='indexFooterBtnItem'>"
  );
  document.writeln("        <div class='col-4 m-0 p-0'>");
  document.writeln("        </div>");
  document.writeln(
    "        <a class='col-4 centerCenter' href='../page/MyPurse1.html'>"
  );
  document.writeln(
    "          <img src='../img/手機index_img/bottomList/Frame 620.png' class='img-fluid' alt=''>"
  );
  document.writeln("        </a>");
  document.writeln(
    "        <a class='col-4 centerCenter' href='../page/MyPurse2.html'>"
  );
  document.writeln(
    "          <img src='../img/手機index_img/bottomList/Frame 621.png' class='img-fluid' alt=''>"
  );
  document.writeln("        </a>");
  document.writeln("      </div>");
  document.writeln("      <!--  -->");
  document.writeln("      <div class='row px-0 py-1 m-0'>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/Promotion.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb4.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/24H.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/b3.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col centerCenter px-0 card_c' style='z-index: 99; margin-top: -45px;'>"
  );
  document.writeln("          <a href='../index.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb5.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <div id='indexFooterBtn' class='centerCenter'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb2.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/MyPurse.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb1.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("  </div>");
  document.writeln("  <script src='../js/indexFooterBtn.js'></script>");
}

// MD Footer 存取款
function MDFooter3() {
  document.writeln(
    "<div id='indexFooterBtnItemBG' class='m-0 p-0 container-fluid d-none vh-100 fixed-bottom'"
  );
  document.writeln("    style='background-color: #000;opacity: .5;'></div>");
  document.writeln(
    "  <div id='footerHCopy' class='container-fluid  p-0 m-0 fixed-bottom  bgc-flex-v bg-transparent'"
  );
  document.writeln(
    "    style='background-image: url(../img/手機index_img/bgb1.png);'>"
  );
  document.writeln("    <div class='m-0 p-0 centerCenter container-sm'>");
  document.writeln("      <!--  -->");
  document.writeln(
    "      <div class='row m-0 p-0 py-1 d-none pb-3' id='indexFooterBtnItem'>"
  );
  document.writeln("        <div class='col-4 m-0 p-0'>");
  document.writeln("        </div>");
  document.writeln(
    "        <a class='col-4 centerCenter' href='../page/MyPurse1.html'>"
  );
  document.writeln(
    "          <img src='../img/手機index_img/bottomList/Frame 620.png' class='img-fluid' alt=''>"
  );
  document.writeln("        </a>");
  document.writeln(
    "        <a class='col-4 centerCenter' href='../page/MyPurse2.html'>"
  );
  document.writeln(
    "          <img src='../img/手機index_img/bottomList/Frame 621.png' class='img-fluid' alt=''>"
  );
  document.writeln("        </a>");
  document.writeln("      </div>");
  document.writeln("      <!--  -->");
  document.writeln("      <div class='row px-0 py-1 m-0'>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/Promotion.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb4.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/24H.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb3.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln(
    "        <div class='col centerCenter px-0 card_c' style='z-index: 99; margin-top: -45px;'>"
  );
  document.writeln("          <a href='../index.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb5.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <div id='indexFooterBtn' class='centerCenter'>");
  document.writeln(
    "            <img src='../img/手機index_img/b2.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </div>");
  document.writeln("        </div>");
  document.writeln("        <div class='col centerCenter px-0 card_c'>");
  document.writeln("          <a href='../page/MyPurse.html'>");
  document.writeln(
    "            <img src='../img/手機index_img/sb1.png' class='img-fluid' alt=''>"
  );
  document.writeln("          </a>");
  document.writeln("        </div>");
  document.writeln("      </div>");
  document.writeln("    </div>");
  document.writeln("  </div>");
  document.writeln("  <script src='../js/indexFooterBtn.js'></script>");
}
