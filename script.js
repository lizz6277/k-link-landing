// Initialize Lucide icons
lucide.createIcons();

// Demo Data
const demoData = {
    orders: [
        { id: 'ORD-CORTIS-001', name: 'yura_012', item: 'Color Outside the Lines Album', qty: 1, amount: 450, wishes: '1.Martin / 2.James', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-002', name: 'mochi_fan', item: 'Color Outside the Lines Album', qty: 2, amount: 900, wishes: '1.James / 2.Juhoon', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-003', name: 'sunshine_99', item: 'Color Outside the Lines Album', qty: 1, amount: 450, wishes: '1.Juhoon / 2.Seonghyeon', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-004', name: 'kpop_lover_x', item: 'Color Outside the Lines Album', qty: 3, amount: 1350, wishes: '1.Seonghyeon / 2.Keonho', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-005', name: 'starry_night', item: 'Color Outside the Lines Album', qty: 1, amount: 450, wishes: '1.Keonho / 2.Martin', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-006', name: 'blue_ocean', item: 'Color Outside the Lines Album', qty: 2, amount: 900, wishes: '1.Martin / 2.James', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-007', name: 'mint_choco', item: 'Color Outside the Lines Album', qty: 1, amount: 450, wishes: '1.James / 2.Juhoon', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-008', name: 'cherry_blossom', item: 'Color Outside the Lines Album', qty: 2, amount: 900, wishes: '1.Juhoon / 2.Seonghyeon', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-009', name: 'winter_bear', item: 'Color Outside the Lines Album', qty: 1, amount: 450, wishes: '1.Seonghyeon / 2.Keonho', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-010', name: 'summer_breeze', item: 'Color Outside the Lines Album', qty: 3, amount: 1350, wishes: '1.Keonho / 2.Martin', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-011', name: 'cloudy_day', item: 'Color Outside the Lines Album', qty: 1, amount: 450, wishes: '1.Martin / 2.James', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-012', name: 'sparkle_joy', item: 'Color Outside the Lines Album', qty: 2, amount: 900, wishes: '1.James / 2.Juhoon', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-013', name: 'dreamy_eyes', item: 'Color Outside the Lines Album', qty: 1, amount: 450, wishes: '1.Juhoon / 2.Seonghyeon', status: '待對帳', time: '' },
        { id: 'ORD-CORTIS-014', name: 'magic_shop', item: 'Color Outside the Lines Album', qty: 2, amount: 900, wishes: '1.Seonghyeon / 2.Keonho', status: '待對帳', time: '' }
    ],
    reconciled: false,
    sorted: false
};

// Demo UI Controller
const demoUI = {
    showFanDemo() {
        document.getElementById('demo-role-select').classList.add('hidden');
        document.getElementById('demo-fan').classList.remove('hidden');
        document.getElementById('demo-seller').classList.add('hidden');
        lucide.createIcons();
    },
    showSellerDemo() {
        document.getElementById('demo-role-select').classList.add('hidden');
        document.getElementById('demo-seller').classList.remove('hidden');
        document.getElementById('demo-fan').classList.add('hidden');
        this.renderOrders();
        lucide.createIcons();
    },
    backToRoleSelect() {
        document.getElementById('demo-role-select').classList.remove('hidden');
        document.getElementById('demo-fan').classList.add('hidden');
        document.getElementById('demo-seller').classList.add('hidden');
        document.getElementById('demo-fan-result').classList.add('hidden');
        document.getElementById('demo-fan-input').value = '';
        document.getElementById('demo-orders-section').classList.add('hidden');
        lucide.createIcons();
    },
    searchFanOrder() {
        const input = document.getElementById('demo-fan-input').value.trim();
        if (input === '0912345678' || input === '0912345678') {
            document.getElementById('demo-fan-result').classList.remove('hidden');
        } else {
            alert('請輸入示範號碼：0912345678');
        }
    },
    showProjectOrders() {
        const section = document.getElementById('demo-orders-section');
        const icon = document.getElementById('demo-toggle-icon');
        if (section.classList.contains('hidden')) {
            section.classList.remove('hidden');
            icon.setAttribute('data-lucide', 'chevron-up');
            // Update revenue stats when showing orders
            this.updateRevenueStats();
        } else {
            section.classList.add('hidden');
            icon.setAttribute('data-lucide', 'chevron-down');
        }
        lucide.createIcons();
        
        // Hide scroll hint after user scrolls the table
        setTimeout(() => {
            const scrollContainer = document.querySelector('.demo-table-scroll');
            if (scrollContainer) {
                const scrollHint = scrollContainer.parentElement.querySelector('.md\\:hidden');
                if (scrollHint && scrollHint.textContent.includes('左右滑動')) {
                    let hasScrolled = false;
                    scrollContainer.addEventListener('scroll', () => {
                        if (!hasScrolled && scrollContainer.scrollLeft > 10) {
                            hasScrolled = true;
                            scrollHint.style.transition = 'opacity 0.3s';
                            scrollHint.style.opacity = '0';
                            setTimeout(() => {
                                scrollHint.style.display = 'none';
                            }, 300);
                        }
                    }, { once: false });
                }
            }
        }, 100);
    },
    updateRevenueStats() {
        // Calculate total revenue from all orders
        const totalAmount = demoData.orders.reduce((sum, order) => sum + order.amount, 0);
        const paidAmount = demoData.reconciled ? totalAmount : 0;
        const unpaidAmount = demoData.reconciled ? 0 : totalAmount;
        
        const revenueStats = document.querySelectorAll('.grid.grid-cols-3 .bg-white');
        if (revenueStats.length >= 3) {
            // Update 總營收 (first card)
            const totalCard = revenueStats[0];
            const totalValue = totalCard.querySelector('p.text-lg, p.text-2xl');
            if (totalValue) {
                totalValue.textContent = `NT$ ${totalAmount.toLocaleString()}`;
            }
            // Update 已收款 (second card)
            const paidCard = revenueStats[1];
            const paidValue = paidCard.querySelector('p.text-lg, p.text-2xl');
            if (paidValue) {
                paidValue.textContent = `NT$ ${paidAmount.toLocaleString()}`;
            }
            // Update 待收款 (third card)
            const unpaidCard = revenueStats[2];
            const unpaidValue = unpaidCard.querySelector('p.text-lg, p.text-2xl');
            if (unpaidValue) {
                unpaidValue.textContent = `NT$ ${unpaidAmount.toLocaleString()}`;
            }
        }
    },
    renderOrders() {
        const tbody = document.getElementById('demo-orders-table-body');
        tbody.innerHTML = demoData.orders.map(order => `
            <tr class="hover:bg-gray-50/50 transition-colors" data-id="${order.id}">
                <td class="pl-4 pr-3 md:px-8 py-2 md:py-4 sticky left-0 bg-white z-10 border-r border-gray-100">
                    <p class="text-xs md:text-sm font-black text-gray-900">${order.name}</p>
                </td>
                <td class="px-3 md:px-8 py-2 md:py-4">
                    <p class="text-xs md:text-sm font-medium text-gray-700">${order.item}${order.qty > 1 ? ` x${order.qty}` : ''}</p>
                </td>
                <td class="px-3 md:px-8 py-2 md:py-4">
                    <p class="text-xs md:text-sm font-black text-gray-900">NT$ ${order.amount}</p>
                </td>
                <td class="px-3 md:px-8 py-2 md:py-4">
                    ${order.assigned ? 
                        `<div>
                            <p class="text-[10px] md:text-xs text-gray-400 mb-1">${order.wishes}</p>
                            <p class="text-xs md:text-sm font-black text-lilac-500">✓ 已分配: ${order.assigned}</p>
                        </div>` :
                        `<p class="text-xs md:text-sm font-medium text-lilac-500">${order.wishes}</p>`
                    }
                </td>
                <td class="px-3 md:px-8 py-2 md:py-4 text-center">
                    <span class="px-2 md:px-3 py-0.5 md:py-1 rounded-lg text-[9px] md:text-[10px] font-black uppercase ${
                        order.status === '已配位' ? 'bg-lilac-50 text-lilac-500' :
                        order.status === '已對帳' ? 'bg-green-50 text-green-500' : 
                        'bg-amber-50 text-amber-500'
                    }">${order.status}</span>
                </td>
                <td class="px-3 md:px-8 py-2 md:py-4">
                    <p class="text-[10px] md:text-xs font-bold text-gray-400">${order.time || '-'}</p>
                </td>
            </tr>
        `).join('');
        lucide.createIcons();
        
        // Hide scroll hint after user scrolls the table
        setTimeout(() => {
            const scrollContainer = document.querySelector('.demo-table-scroll');
            if (scrollContainer) {
                const scrollHint = scrollContainer.parentElement.querySelector('.md\\:hidden');
                if (scrollHint && scrollHint.textContent.includes('左右滑動')) {
                    let hasScrolled = false;
                    scrollContainer.addEventListener('scroll', () => {
                        if (!hasScrolled && scrollContainer.scrollLeft > 10) {
                            hasScrolled = true;
                            scrollHint.style.transition = 'opacity 0.3s';
                            scrollHint.style.opacity = '0';
                            setTimeout(() => {
                                scrollHint.style.display = 'none';
                            }, 300);
                        }
                    }, { once: false });
                }
            }
        }, 100);
    },
    openReconciliationModal() {
        // Check if already reconciled
        if (demoData.reconciled) {
            this.showAlreadyReconciledAlert();
            return;
        }
        
        const modal = document.getElementById('demo-reconcile-modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        lucide.createIcons();
        
        // Setup upload area click
        document.getElementById('demo-upload-area').onclick = () => this.startUpload();
    },
    showAlreadyReconciledAlert() {
        const modal = document.getElementById('demo-reconcile-alert-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            lucide.createIcons();
        }
    },
    closeReconcileAlert() {
        const modal = document.getElementById('demo-reconcile-alert-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    },
    closeReconcileModal() {
        const modal = document.getElementById('demo-reconcile-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        // Reset modal state
        document.getElementById('demo-upload-area').classList.remove('hidden');
        document.getElementById('demo-upload-progress').classList.add('hidden');
        document.getElementById('demo-reconcile-success').classList.add('hidden');
        document.getElementById('demo-close-reconcile-btn').classList.add('hidden');
    },
    startUpload() {
        const uploadArea = document.getElementById('demo-upload-area');
        const progress = document.getElementById('demo-upload-progress');
        const bar = document.getElementById('demo-upload-bar');
        const percent = document.getElementById('demo-upload-percent');
        
        uploadArea.classList.add('hidden');
        progress.classList.remove('hidden');
        
        // Simulate upload progress
        let current = 0;
        const interval = setInterval(() => {
            current += 10;
            bar.style.width = current + '%';
            percent.textContent = current + '%';
            if (current >= 100) {
                clearInterval(interval);
                setTimeout(() => this.processReconciliation(), 1000);
            }
        }, 200);
    },
    processReconciliation() {
        const progress = document.getElementById('demo-upload-progress');
        const success = document.getElementById('demo-reconcile-success');
        const closeBtn = document.getElementById('demo-close-reconcile-btn');
        
        progress.classList.add('hidden');
        success.classList.remove('hidden');
        closeBtn.classList.remove('hidden');
        
        // Update orders with reconciliation
        const times = ['2025-12-27 10:15', '2025-12-27 10:32', '2025-12-27 11:05', '2025-12-27 11:18', '2025-12-27 11:45', '2025-12-27 12:10', '2025-12-27 12:33', '2025-12-27 13:02', '2025-12-27 13:25', '2025-12-27 13:48', '2025-12-27 14:12', '2025-12-27 14:35', '2025-12-27 15:01', '2025-12-27 15:22'];
        let totalAmount = 0;
        demoData.orders.forEach((order, index) => {
            order.status = '已對帳';
            order.time = times[index] || '';
            totalAmount += order.amount;
        });
        demoData.reconciled = true;
        
        // Update revenue stats
        const paidAmount = totalAmount; // All orders are now reconciled
        const unpaidAmount = 0;
        const revenueStats = document.querySelectorAll('.grid.grid-cols-3 .bg-white');
        if (revenueStats.length >= 3) {
            // Update 總營收 (first card) - should match totalAmount
            const totalCard = revenueStats[0];
            const totalValue = totalCard.querySelector('p.text-lg, p.text-2xl');
            if (totalValue) {
                totalValue.textContent = `NT$ ${totalAmount.toLocaleString()}`;
            }
            // Update 已收款 (second card)
            const paidCard = revenueStats[1];
            const paidValue = paidCard.querySelector('p.text-lg, p.text-2xl');
            if (paidValue) {
                paidValue.textContent = `NT$ ${totalAmount.toLocaleString()}`;
            }
            // Update 待收款 (third card)
            const unpaidCard = revenueStats[2];
            const unpaidValue = unpaidCard.querySelector('p.text-lg, p.text-2xl');
            if (unpaidValue) {
                unpaidValue.textContent = `NT$ ${unpaidAmount.toLocaleString()}`;
            }
        }
        
        // Update UI
        this.renderOrders();
        document.getElementById('demo-matched-count').textContent = demoData.orders.length;
        
        lucide.createIcons();
    },
    closeSortAlert() {
        const modal = document.getElementById('demo-sort-alert-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    },
    showAlreadySortedAlert() {
        const modal = document.getElementById('demo-already-sorted-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            lucide.createIcons();
        }
    },
    closeAlreadySortedAlert() {
        const modal = document.getElementById('demo-already-sorted-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    },
    showAlreadySortedAlert() {
        const modal = document.getElementById('demo-already-sorted-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            lucide.createIcons();
        }
    },
    closeAlreadySortedAlert() {
        const modal = document.getElementById('demo-already-sorted-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    },
    closeReconcileAlert() {
        const modal = document.getElementById('demo-reconcile-alert-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    },
    runSorting() {
        if (!demoData.reconciled) {
            const modal = document.getElementById('demo-sort-alert-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            lucide.createIcons();
            return;
        }
        
        // Check if already sorted
        if (demoData.sorted) {
            this.showAlreadySortedAlert();
            return;
        }
        
        const btn = document.getElementById('demo-sort-btn');
        btn.disabled = true;
        btn.innerHTML = '<span class="animate-spin">⏳</span> 配位中...';
        
        // Simulate sorting with animation
        let processed = 0;
        const total = demoData.orders.length;
        
        const processOrder = (index) => {
            if (index >= total) {
                demoData.sorted = true;
                btn.disabled = false;
                btn.innerHTML = '<i data-lucide="sparkles" class="w-4 h-4"></i><span>執行配位</span>';
                
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.className = 'fixed top-6 right-6 bg-lilac-50 border border-lilac-100 p-4 rounded-2xl shadow-premium z-[300]';
                successMsg.innerHTML = `
                    <div class="flex items-center space-x-3">
                        <i data-lucide="sparkles" class="w-5 h-5 text-lilac-500"></i>
                        <p class="text-sm font-black text-lilac-600">小卡配位完成！已為 ${total} 位買家完成配位</p>
                    </div>
                `;
                document.body.appendChild(successMsg);
                lucide.createIcons();
                setTimeout(() => successMsg.remove(), 3000);
                return;
            }
            
            const order = demoData.orders[index];
            order.status = '已配位';
            // Assign based on first wish
            const firstWish = order.wishes.split('/')[0].trim().split('.')[1].trim();
            order.assigned = firstWish;
            
            this.renderOrders();
            lucide.createIcons();
            
            setTimeout(() => processOrder(index + 1), 150);
        };
        
        setTimeout(() => processOrder(0), 500);
    },
    openNotificationModal() {
        const modal = document.getElementById('demo-notification-modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        lucide.createIcons();
    },
    closeNotificationModal() {
        const modal = document.getElementById('demo-notification-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    },
    sendNotification(type) {
        const modal = document.getElementById('demo-notification-modal');
        const btn = type === 'second-chance' 
            ? document.getElementById('demo-notification-second-chance')
            : document.getElementById('demo-notification-shipping');
        
        // Disable button and show loading
        btn.disabled = true;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="w-5 h-5 border-2 border-lilac-100 border-t-lilac-500 rounded-full animate-spin"></div>
                <div>
                    <p class="font-black text-sm text-gray-900">發送中...</p>
                    <p class="text-xs text-gray-400">正在處理</p>
                </div>
            </div>
        `;
        
        // Simulate sending notification
        setTimeout(() => {
            // Update button to show sent state
            btn.innerHTML = `
                <div class="flex items-center space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-gray-400"></i>
                    <div>
                        <p class="font-black text-sm text-gray-400">${type === 'second-chance' ? '二補下單通知' : '出貨通知'}</p>
                        <p class="text-xs text-gray-400">已寄送</p>
                    </div>
                </div>
                <i data-lucide="check" class="w-5 h-5 text-gray-400"></i>
            `;
            btn.classList.remove('border-gray-100', 'hover:border-lilac-300');
            btn.classList.add('bg-gray-100', 'cursor-not-allowed');
            lucide.createIcons();
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'fixed top-6 right-6 bg-lilac-50 border border-lilac-100 p-4 rounded-2xl shadow-premium z-[300]';
            successMsg.innerHTML = `
                <div class="flex items-center space-x-3">
                    <i data-lucide="mail" class="w-5 h-5 text-lilac-500"></i>
                    <p class="text-sm font-black text-lilac-600">${type === 'second-chance' ? '二補下單通知' : '出貨通知'}已成功發送給所有買家</p>
                </div>
            `;
            document.body.appendChild(successMsg);
            lucide.createIcons();
            setTimeout(() => successMsg.remove(), 3000);
        }, 1500);
    }
};

// Allow Enter key to search
document.addEventListener('DOMContentLoaded', () => {
    const fanInput = document.getElementById('demo-fan-input');
    if (fanInput) {
        fanInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                demoUI.searchFanOrder();
            }
        });
    }
});

// Feature Tabs Controller
const featureTabs = {
    currentTab: 'reconciliation',
    videoData: {
        reconciliation: {
            title: '自動對帳',
            description: '只需上傳銀行 CSV 明細，系統會自動比對後五碼與金額，準確率達 99.9%，一秒完成百筆訂單確認。',
            videoSrc: 'https://rppl0rsu6jd4zda6.public.blob.vercel-storage.com/klink_demo_Reconciliation.mp4'
        },
        sorting: {
            title: '小卡配位',
            description: '獨家開發的算法模型，基於下單順序與志願序，自動完成最公平的小卡配位工作，公正公開。',
            videoSrc: 'https://rppl0rsu6jd4zda6.public.blob.vercel-storage.com/klink_demo_sorting.mp4'
        },
        query: {
            title: '買家查詢',
            description: '告別公用對帳表格，給買家一個專屬的查詢入口，也可直接進行二補下單並回填單號，讓賣家方便核對且不再被私訊轟炸。',
            videoSrc: 'https://rppl0rsu6jd4zda6.public.blob.vercel-storage.com/klink_buyer_demo.mp4'
        },
        import: {
            title: '一鍵匯入',
            description: '一鍵導入Google sheet資料，數據即刻進入K-Link Pro 系統，開啟自動化管理的代購流程。',
            videoSrc: 'https://rppl0rsu6jd4zda6.public.blob.vercel-storage.com/klink_demo_import.mp4'
        },
        notification: {
            title: '寄送通知',
            description: '一鍵發送匯款、二補下單與出貨通知，自動化溝通流程，減少重複性工作。',
            videoSrc: 'https://rppl0rsu6jd4zda6.public.blob.vercel-storage.com/klink_mail_demo.mp4'
        }
    },
    
    switchTab(tabName) {
        // Update active tab button
        document.querySelectorAll('.feature-tab').forEach(btn => {
            btn.classList.remove('active', 'border-lilac-400', 'bg-lilac-50');
            btn.classList.add('border-gray-100', 'bg-white');
        });
        
        const activeBtn = document.getElementById(`tab-${tabName}`);
        if (activeBtn) {
            activeBtn.classList.add('active', 'border-lilac-400', 'bg-lilac-50');
            activeBtn.classList.remove('border-gray-100', 'bg-white');
        }
        
        // Update video and content
        const data = this.videoData[tabName];
        if (!data) return;
        
        const video = document.getElementById('feature-video');
        const placeholder = document.getElementById('feature-video-placeholder');
        const titleEl = document.getElementById('feature-title');
        const descEl = document.getElementById('feature-description');
        
        // Update text content
        if (titleEl) titleEl.textContent = data.title;
        if (descEl) descEl.textContent = data.description;
        
        // Mobile: Move video container below active button
        this.moveVideoContainerForMobile(activeBtn);
        
        // Handle video
        if (data.videoSrc) {
            const videoSource = document.getElementById('feature-video-source');
            const loadingIndicator = document.getElementById('feature-video-loading');
            const currentSrc = videoSource ? videoSource.getAttribute('src') : video.getAttribute('src');
            
            console.log('Switching to video:', data.videoSrc);
            console.log('Current src:', currentSrc);
            
            // Check if video source needs to change
            if (currentSrc !== data.videoSrc) {
                // Hide placeholder and show loading indicator
                if (placeholder) placeholder.style.display = 'none';
                if (loadingIndicator) {
                    loadingIndicator.classList.remove('hidden');
                    loadingIndicator.style.display = 'flex';
                }
                
                // Show video container (but keep opacity 0 initially)
                video.style.display = 'block';
                video.style.opacity = '0';
                video.style.visibility = 'visible';
                
                // Pause and reset current video
                video.pause();
                video.currentTime = 0;
                
                // Remove all existing event listeners by cloning
                const newVideo = video.cloneNode(true);
                video.parentNode.replaceChild(newVideo, video);
                const updatedVideo = document.getElementById('feature-video');
                const updatedSource = document.getElementById('feature-video-source');
                
                // Ensure video is visible
                updatedVideo.style.display = 'block';
                updatedVideo.style.visibility = 'visible';
                
                // Update source element only (don't set video src directly when using source element)
                if (updatedSource) {
                    updatedSource.setAttribute('src', data.videoSrc);
                    console.log('Updated source element src to:', data.videoSrc);
                    // Remove src from video element if source element exists
                    updatedVideo.removeAttribute('src');
                } else {
                    // Fallback: set video src directly if no source element
                    updatedVideo.setAttribute('src', data.videoSrc);
                    console.log('Updated video src to:', data.videoSrc);
                }
                
                // Load the new video
                updatedVideo.load();
                console.log('Video load() called. Current src:', updatedVideo.src || updatedSource?.getAttribute('src'));
                
                // Wait for video to be ready - try multiple events
                if (updatedVideo.readyState >= 2) {
                    console.log('Video already loaded, ready state:', updatedVideo.readyState);
                    // Hide loading indicator
                    if (loadingIndicator) {
                        loadingIndicator.classList.add('hidden');
                        loadingIndicator.style.display = 'none';
                    }
                    updatedVideo.style.opacity = '1';
                    updatedVideo.play().then(() => {
                        console.log('Video playing successfully');
                    }).catch(err => {
                        console.error('Video play error:', err);
                    });
                } else {
                    // Try canplaythrough first (most complete), then canplay, then loadeddata
                    updatedVideo.addEventListener('canplaythrough', () => {
                        console.log('Video canplaythrough event fired');
                        if (loadingIndicator) {
                            loadingIndicator.classList.add('hidden');
                            loadingIndicator.style.display = 'none';
                        }
                        updatedVideo.style.opacity = '1';
                        updatedVideo.play().then(() => {
                            console.log('Video playing successfully');
                        }).catch(err => {
                            console.error('Video play error:', err);
                        });
                    }, { once: true });
                    
                    updatedVideo.addEventListener('canplay', () => {
                        console.log('Video canplay event fired. Ready state:', updatedVideo.readyState);
                        if (loadingIndicator) {
                            loadingIndicator.classList.add('hidden');
                            loadingIndicator.style.display = 'none';
                        }
                        updatedVideo.style.opacity = '1';
                        updatedVideo.play().then(() => {
                            console.log('Video playing successfully');
                        }).catch(err => {
                            console.error('Video play error:', err);
                        });
                    }, { once: true });
                    
                    updatedVideo.addEventListener('loadeddata', () => {
                        console.log('Video loadeddata event fired. Ready state:', updatedVideo.readyState);
                        setTimeout(() => {
                            if (loadingIndicator) {
                                loadingIndicator.classList.add('hidden');
                                loadingIndicator.style.display = 'none';
                            }
                            updatedVideo.style.opacity = '1';
                            updatedVideo.play().then(() => {
                                console.log('Video playing successfully');
                            }).catch(err => {
                                console.error('Video play error:', err);
                            });
                        }, 100);
                    }, { once: true });
                    
                    // Fallback: try after a short delay
                    setTimeout(() => {
                        if (updatedVideo.readyState >= 2) {
                            console.log('Fallback: Video ready after timeout');
                            if (loadingIndicator) {
                                loadingIndicator.classList.add('hidden');
                                loadingIndicator.style.display = 'none';
                            }
                            updatedVideo.style.opacity = '1';
                            updatedVideo.play().then(() => {
                                console.log('Video playing successfully');
                            }).catch(err => {
                                console.error('Video play error:', err);
                            });
                        } else {
                            console.warn('Video not ready after timeout. Ready state:', updatedVideo.readyState);
                        }
                    }, 1000);
                }
                
                // Error handling
                updatedVideo.addEventListener('error', (e) => {
                    const error = updatedVideo.error;
                    console.error('Video loading error:', e);
                    console.error('Video source:', data.videoSrc);
                    console.error('Video error code:', error ? error.code : 'Unknown');
                    console.error('Video error message:', error ? error.message : 'Unknown');
                    
                    // Error code meanings:
                    // 1 = MEDIA_ERR_ABORTED
                    // 2 = MEDIA_ERR_NETWORK
                    // 3 = MEDIA_ERR_DECODE
                    // 4 = MEDIA_ERR_SRC_NOT_SUPPORTED
                    
                    let errorMsg = '未知錯誤';
                    if (error) {
                        switch(error.code) {
                            case 1:
                                errorMsg = '載入被中止';
                                break;
                            case 2:
                                errorMsg = '網路錯誤（可能是 CORS 問題）';
                                break;
                            case 3:
                                errorMsg = '解碼錯誤';
                                break;
                            case 4:
                                errorMsg = '格式不支援';
                                break;
                        }
                    }
                    
                    if (placeholder) {
                        placeholder.style.display = 'flex';
                        placeholder.innerHTML = `
                            <div class="text-center">
                                <div class="w-20 h-20 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                                    <i data-lucide="alert-circle" class="w-10 h-10 text-red-500"></i>
                                </div>
                                <p class="text-gray-400 font-medium">影片載入失敗</p>
                                <p class="text-xs text-gray-300 mt-2">${errorMsg}</p>
                                <p class="text-xs text-gray-300 mt-1">錯誤代碼：${error ? error.code : 'Unknown'}</p>
                                <a href="${data.videoSrc}" target="_blank" class="text-xs text-lilac-400 hover:text-lilac-600 mt-2 inline-block underline">
                                    直接開啟影片連結
                                </a>
                            </div>
                        `;
                        lucide.createIcons();
                    }
                }, { once: true });
            } else {
                // Same video, just show and play it
                console.log('Same video, replaying');
                const loadingIndicator = document.getElementById('feature-video-loading');
                if (loadingIndicator) {
                    loadingIndicator.classList.add('hidden');
                    loadingIndicator.style.display = 'none';
                }
                video.style.display = 'block';
                video.style.visibility = 'visible';
                video.style.opacity = '1';
                if (placeholder) placeholder.style.display = 'none';
                video.play().catch(err => {
                    console.error('Video replay error:', err);
                });
            }
        } else {
            // No video yet, show placeholder
            const loadingIndicator = document.getElementById('feature-video-loading');
            if (loadingIndicator) {
                loadingIndicator.classList.add('hidden');
                loadingIndicator.style.display = 'none';
            }
            if (placeholder) placeholder.style.display = 'flex';
            video.style.display = 'none';
            video.style.opacity = '0';
        }
        
        this.currentTab = tabName;
        lucide.createIcons();
    },
    
    // Method to set video sources (call this after videos are added)
    setVideoSource(tabName, videoSrc) {
        if (this.videoData[tabName]) {
            this.videoData[tabName].videoSrc = videoSrc;
        }
    },
    
    moveVideoContainerForMobile(activeTab) {
        // Use querySelector with attribute selector to find the sticky container
        const videoContainer = document.querySelector('[class*="lg:sticky"]') || 
                               document.querySelector('.lg\\:sticky') ||
                               document.querySelector('.lg\\:top-24');
        
        if (!videoContainer || !activeTab) return;
        
        // Check if we're on mobile (screen width < 1024px)
        const isMobile = window.innerWidth < 1024;
        
        if (isMobile) {
            // Mobile: Insert video container after active button
            const nextSibling = activeTab.nextElementSibling;
            
            // Only move if not already in the right position
            if (nextSibling !== videoContainer) {
                // Remove from current position
                videoContainer.remove();
                // Insert after active button
                activeTab.insertAdjacentElement('afterend', videoContainer);
            }
        } else {
            // Desktop: Move back to original position (right side of grid)
            const gridContainer = document.querySelector('.grid.lg\\:grid-cols-2');
            
            if (gridContainer && !gridContainer.contains(videoContainer)) {
                // Move video back to grid container (will be on right side due to grid layout)
                videoContainer.remove();
                gridContainer.appendChild(videoContainer);
            }
        }
    }
};

// Initialize first tab on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active state and load first video
    const firstTab = document.getElementById('tab-reconciliation');
    if (firstTab) {
        firstTab.classList.add('border-lilac-400', 'bg-lilac-50');
        firstTab.classList.remove('border-gray-100', 'bg-white');
    }
    // Load first tab's video
    featureTabs.switchTab('reconciliation');
    
    // Handle window resize to reposition video container
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const activeTab = document.querySelector('.feature-tab.active');
            if (activeTab) {
                featureTabs.moveVideoContainerForMobile(activeTab);
            }
        }, 250);
    });
    
    // Footer contact form handler
    const footerForm = document.getElementById('footer-contact-form');
    const footerMessage = document.getElementById('footer-form-message');
    
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(footerForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Show loading state
            const submitBtn = footerForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '送出中...';
            submitBtn.disabled = true;
            
            // Send to Vercel API endpoint
            fetch('/api/contact', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Show success message
                    footerMessage.textContent = '✓ 訊息已送出！我們會在 24 小時內回覆您。';
                    footerMessage.className = 'mt-3 text-sm text-green-600 font-medium';
                    footerMessage.classList.remove('hidden');
                    
                    // Reset form
                    footerForm.reset();
                } else {
                    // Show error message
                    footerMessage.textContent = '✗ 送出失敗，請稍後再試。';
                    footerMessage.className = 'mt-3 text-sm text-red-600 font-medium';
                    footerMessage.classList.remove('hidden');
                }
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    footerMessage.classList.add('hidden');
                }, 5000);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                footerMessage.textContent = '✗ 送出失敗，請稍後再試。';
                footerMessage.className = 'mt-3 text-sm text-red-600 font-medium';
                footerMessage.classList.remove('hidden');
                
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                setTimeout(() => {
                    footerMessage.classList.add('hidden');
                }, 5000);
            });
        });
    }
});

