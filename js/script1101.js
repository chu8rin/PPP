(() => {
    // 初期状態：サイドバーは閉じた状態
    let sidebarOpen = false;
    let activeTab = "all";
    let currentTab = "";

    // サイドバーの開閉を切り替える関数
    function toggleSidebar() {
        sidebarOpen = !sidebarOpen;
        document.getElementById('sidebar').style.transform = sidebarOpen ? 'translateX(0)' : 'translateX(-100%)';
        document.getElementById('main-content').style.marginLeft = sidebarOpen ? '16rem' : '0';
    }

    //申込中、NFTコレクション
    function showTab(tabName) {
        const content = document.getElementById("content");
        if (!content) {
            console.error("content要素が見つかりません");
            return;
        }
    
        // クリックされたタブが現在のタブなら何もしない
        if (currentTab === tabName) return;
    
        // タブの状態を更新
        currentTab = tabName;
    
        // タブごとの表示内容を切り替え
        if (tabName === "申込中") {
            content.innerHTML = `
                <section>
                    <h2 class="text-2xl font-bold mb-4">申込中のチケット</h2>
                    <p>申込中のチケット情報をここに表示します。</p>
                </section>
            `;
        } else if (tabName === "My NFT") {
            content.innerHTML = `
                <section>
                    <h2 class="text-2xl font-bold mb-4">NFT Collection</h2>
                    <p>あなたのNFTコレクションをここに表示します。</p>
                </section>
            `;
        } else {
            content.innerHTML = ""; // タブが不明な場合は空にする
        }
    }

    function showQRCode(buttonElement) {
        const qrContainer = buttonElement.nextElementSibling;

            // 既存の画像をクリア
            qrContainer.innerHTML = "";

            // 事前に決めたQRコード画像のURLを設定
            const imageUrl = "image/qr-code-image.jpg"; // ここに事前に用意した画像のパスを設定

            // 新しい img 要素を作成
            const img = document.createElement("img");
            img.src = imageUrl; // 事前のQRコード画像のURLを設定
            img.alt = "QRコード";

            // コンテナに画像を追加
            qrContainer.appendChild(img);
    }
    
    //あなたのチケット
    function showTicket() {
        const content = document.getElementById("content");
        if (currentTab === "ticket") return;
        currentTab = "ticket";

        content.innerHTML = `
            <section class="events-section">
                <h2 class="text-2xl font-bold mb-4">所有しているチケット</h2>
                <div class="events-grid">
                    <div class="ticket-card">
                        <img src="image/ticket5.png" alt="Event 5">
                        <div class="ticket-info">
                            <p class="ticket-title">Zepp Dance Tour</p>
                            <p class="ticket-location">Zepp Namba</p>
                            <p class="ticket-date">2025.2.14<br>17:00開演</p>
                        </div>
                    </div>
                    <div class="ticket-card" onclick="toggleDetails(this)">
                        <img src="image/ticket6.png" alt="Event 6">
                        <div class="ticket-info">
                            <p class="ticket-title">FIRST DOME TOUR「FIVE★STARS」</p>
                            <p class="ticket-location">プレミストドーム</p>
                            <p class="ticket-date">2025.3.9<br>18:00開演</p>
                        </div>
                        <div class="ticket-details" style="display:none;">
                            <div class="event-header">
                                <img src="image/ticket6.png" alt="Event 6" class="event-logo">
                                <h3 class="event-title">FIRST DOME TOUR「FIVE★STARS」</h3>
                            </div>
                            <p>場所: プレミストドーム</p>
                            <p>日時: 2025年3月9日 / 16:00開場 18:00開演(予定)</p>
                            <p>入場ゲート: 6ゲート</p>
                            <button class="qrcode">譲渡する</button>
                            <!-- QRコード表示ボタン -->
                            <button class="qrcode" onclick="showQRCode(this)">QRコードを表示</button>
    
                            <!-- QRコードを表示するコンテナ -->
                            <div id="qr-code-container" style="margin-top: 20px;"></div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        const eventsGrid = document.querySelector(".events-grid");
        if (eventsGrid) {
            eventsGrid.style.display = "grid";
        }
    }

    //申込中のチケット
    function showTicket1() {
        const content = document.getElementById("content");
        if (currentTab === "申込中のチケット") return;
        currentTab = "申込中のチケット";

        content.innerHTML = `
            <section class="events-section">
                <h2 class="text-2xl font-bold mb-4">申込中のチケット</h2>
                <div class="events-grid">
                    <div class="ticket-card" onclick="toggleDetails(this)">
                        <img src="image/ticket2.png" alt="Event 2">
                        <div class="ticket-info">
                            <p class="ticket-title">CHRISTMAS CONCERT 2024</p>
                            <p class="ticket-location">東京ドーム</p>
                            <p class="ticket-date">2024.12.15</p>
                        </div>
                        <div class="ticket-details" style="display:none;">
                            <div class="event-header">
                                <img src="image/ticket2.png" alt="Event 2" class="event-logo">
                                <h3 class="event-title">CHRISTMAS CONCERT 2024</h3>
                            </div>
                            <p>場所: 東京ドーム</p>
                            <p>日時: 2024年12月15日（日） <br> 17:00開場 19:00開演(予定)</p>
                            <p style="color: red;">入金期限: 2024年12月1日（日）23:59</p>
                            <button class="modal-close">決済に進む</button>
                        </div>
                    </div>
                    <div class="ticket-card" onclick="toggleDetails(this)">
                        <img src="image/ticket4.png" alt="Event 4">
                        <div class="ticket-info">
                            <p class="ticket-title">New Year Concert 2025</p>
                            <p class="ticket-location">京セラドーム</p>
                            <p style="color: red;">申込中</p>
                        </div>
                        <div class="ticket-details" style="display:none;">
                            <div class="event-header">
                                <img src="image/ticket4.png" alt="Event 4" class="event-logo">
                                <h3 class="event-title">New Year Concert 2025</h3>
                            </div>
                            <p>第一希望: 2025.1.3 18:00公演</p>
                            <p>第二希望: 2025.1.5 13:00公演</p>
                            <p>第三希望: 2025.1.5 18:00公演</p>
                            <p style="color: red;">当落発表: 2024.12.07 15:00以降順次発表</p>
                            <button class="modal-close">申込内容を変更する</button>
                        </div>
                    </div>
                </div>
            </section>
        `;

        const eventsGrid = document.querySelector(".events-grid");
        if (eventsGrid) {
            eventsGrid.style.display = "grid";
        }
    }



    //NFTコレクション
    function showNFT() {
        const content = document.getElementById("content");
        if (currentTab === "NFT Collection") return;
        currentTab = "NFT Collection";

        content.innerHTML = `
            <section class="events-section">
                <h2 class="text-2xl font-bold mb-4">NFT　Collection</h2>
                <div class="events-grid">
                    <div class="ticket-card" onclick="toggleDetails(this)">
                        <img src="image/NFT1.png" alt="NFT 1">
                        <div class="ticket-info">
                            <p class="ticket-title">2024 ARENA TOUR「Good Story」</p>
                            <p class="ticket-location">大阪城ホール</p>
                            <p class="ticket-date">2024.8.1<br>13:00</p>
                        </div>
                        <div class="ticket-details" style="display:none;">
                            <div class="event-header">
                                <img src="image/NFT1.png" alt="NFT 1" class="event-logo">
                                <h3 class="event-title">2024 ARENA TOUR<br>「Good Story」</h3>
                            </div>
                            <p>アリーナA3ブロック 1列8番</p>
                            <p>2024年8月1日（木） 13:00</p>
                            <div class="event-actions">
                                <i class="fas fa-music action-icon show-setlist-btn" title="セットリストを見る"></i>
                                <i class="fas fa-camera action-icon show-photo-btn" title="集合写真を見る"></i>

                            </div>
                            <div class="setlist" style="display:none;">
                                <h4>セットリスト</h4>
                                <ul>
                                    <li>曲名1</li>
                                    <li>曲名2</li>
                                    <li>曲名3</li>
                                </ul>
                            </div>
                            <div class="photo" style="display:none;">
                                <h4>集合写真</h4>
                                <img src="peace.png" alt="集合写真">
                            </div>
                        </div>
                    </div>
                    <div class="ticket-card" onclick="toggleDetails(this)">
                        <img src="image/NFT2.png" alt="NFT 2">
                        <div class="ticket-info">
                            <p class="ticket-title">[TWINS]~20th award fes~</p>
                            <p class="ticket-location">武道館</p>
                            <p class="ticket-date">2030年のいつか<br>※2029年1月に詳細をお送りします。</p>
                        </div>
                        <div class="ticket-details" style="display:none;">
                            <div class="event-header">
                                <img src="image/NFT2.png" alt="NFT 2" class="event-logo">
                                <h3 class="event-title">[TWINS]<br>~20th award fes~</h3>
                            </div>
                            <p>場所: 武道館</p>
                            <p>日時: 2030年のいつか</p>
                            <p>「TWINS」10周年ツアーで、グッズをご購入いただいた方と、10年後に武道館での待ち合わせです。2029年1月に、日程などの詳細をお送りします。ぜひ、私たちから目を離さず、10年後にもう一度会いましょう。</p>
                        </div>
                    </div>
                </div>
            </section>
        `;

        const eventsGrid = document.querySelector(".events-grid");
        if (eventsGrid) {
            eventsGrid.style.display = "grid";
        }
    }
    
    function closeWallet() {
        document.getElementById("content").innerHTML = "";
    }

    function showWalletAddress(title = "ウォレットアドレス", walletAddress = "0x1234...abcd") {
        document.getElementById("content").innerHTML = `
            <div class="container" role="dialog" aria-modal="true" aria-labelledby="wallet-title">
                <h2 id="wallet-title" class="text-2xl font-bold text-pop-pink mb-4">${title}</h2>
                <div class="bg-white p-8 rounded-lg shadow">
                    <div class="wallet-box font-mono bg-gray-100 p-4 rounded border border-gray-300 mt-2">
                        ${walletAddress}
                    </div>
                </div>
                <p>
                    ウォレットアドレスとは<br>
                    銀行口座番号のようなものです。<br>
                    誰かがあなた宛にチケットを送りたい場合などに使用します。<br>
                    公開しても問題ありません。
                </p>
                <button onclick="closeWallet()" class="back-button">戻る</button>
            </div>
        `;
    }

    // モーダルのスタックを管理
    const modalStack = [];

    function showModal(detailsHtml) {
        // モーダルのHTMLを動的に作成
        const modal = document.createElement('div');
        modal.id = 'modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="closeTopModal()"></div>
            <div class="modal-content">
                <div class="modal-body">
                    ${detailsHtml}
                </div>
                <div class="parent-container">
                    <button class="modal-close" onclick="closeTopModal()">閉じる</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        modalStack.push(modal);
    }
    
    window.closeTopModal = function(){
        if (modalStack.length > 0) {
            const topModal = modalStack.pop(); // スタックから最新のモーダルを取得
            document.body.removeChild(topModal); // DOMから削除
        }
    }
    
    window.toggleDetails = function(card) {
        const details = card.querySelector('.ticket-details').innerHTML; // 詳細情報を取得
        showModal(details); // モーダルを表示
    };
    
    
    // 申込みモーダルを動的に表示
    window.openApplyModal = function(){
        const detailsHtml = `
            <h2 style="font-size: 1rem; font-weight: bold;">チケット申込み</h2>
            <form id="apply-form">
                <label for="ticket-date">日程を選択:</label>
                <select id="ticket-date" name="ticket-date" required>
                    <option value="">日程を選択してください</option>
                    <option value="2025-02-14">2025年2月14日 (福岡)</option>
                    <option value="2025-02-22">2025年2月22日 (大阪)</option>
                    <option value="2025-03-09">2025年3月9日 (北海道)</option>
                    <option value="2025-04-19">2025年4月19日 (愛知)</option>
                    <option value="2025-05-05">2025年5月5日 (東京)</option>
                </select>
                <label for="ticket-quantity" class="break-line">枚数を選択:</label>
                <input type="number" id="ticket-quantity" name="ticket-quantity" min="1" max="4" required>
                <button type="submit" class="submit-button">申し込む</button>
            </form>
        `;
    
        showModal(detailsHtml);
    
        // フォーム送信の処理
        document.getElementById('apply-form').addEventListener('submit', function (e) {
            e.preventDefault();
    
            const date = document.getElementById('ticket-date').value;
            const quantity = document.getElementById('ticket-quantity').value;
    
            if (date && quantity) {
                alert(`日程: ${date}\n枚数: ${quantity}枚で申し込みを受け付けました！`);
                closeModal();
            } else {
                alert('全ての項目を入力してください。');
            }
        });
    }

    // 買取オファーモーダルを開く
    window.openBuyOfferModal = function(){
        const detailsHtml = `
            <h2 style="font-size: 1rem; font-weight: bold;">買取オファーを送る</h2>
            <p style="font-size: 0.7rem;">すでにチケットを所有しているユーザーから任意の金額で買取りを希望できます。相手が承諾すると買取りが成立します。</p><br>
            <form id="buy-offer-form">
                <label for="item">券種:</label>
                <select id="item" name="item" required>
                    <option value="">選択してください</option>
                    <option value="1DAY">1DAY</option>
                    <option value="2DAYS">2DAYS</option>
                    <option value="3DAYS">3DAYS</option>
                    <option value="ALL DAYS">ALL DAYS</option>
                </select>
                <label for="item-number">オファー枚数:</label>
                <select id="item-number" name="item-number" required>
                    <option value="">選択してください</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <br><br>
                <label for="offer-price">買取オファー金額:</label>
                <input type="number" id="offer-price" name="offer-price" placeholder="１枚あたり" min="1" required>
                <br><br>
                <button type="submit" class="submit-button">送信</button>
            </form>
        `;
    
        showModal(detailsHtml);
    
        // フォーム送信の処理
        document.getElementById('buy-offer-form').addEventListener('submit', function (e) {
            e.preventDefault();
    
            const item = document.getElementById('item').value;
            const itemNumber = document.getElementById('item-number').value;
            const offerPrice = document.getElementById('offer-price').value;
    
            if (item && itemNumber && offerPrice) {
                alert(`${item}チケット\n${itemNumber}枚\n希望価格: ¥${offerPrice}円/枚でオファーを受け付けました！`);
                closeModal();
            } else {
                alert('全ての項目を入力してください。');
            }
        });
    }

    const modal2 = document.getElementById("myModal");
    const btn = document.getElementById("showModalBtn");
    const span = document.getElementsByClassName("close")[0];
    window.onload = function() {
        modal2.style.display = "block";
        window.scrollTo(0, 0);
    };
    // ボタンがクリックされたときにモーダルを表示
    btn.onclick = function() {
        modal2.style.display = "block";
    }

    // 閉じるボタンがクリックされたときにモーダルを非表示にする
    span.onclick = function() {
        modal2.style.display = "none";
    }

    window.toggleSidebar = toggleSidebar;
    window.showQRCode = showQRCode;
    window.showTab = showTab;
    window.showTicket = showTicket;
    window.showTicket1 = showTicket1;
    window.showNFT = showNFT;
    window.showWalletAddress = showWalletAddress;
    window.closeWallet = closeWallet;
    window.showModal = showModal;
})();