// Initialize Lucide icons
lucide.createIcons();

// Random Hero Title
const heroTitles = [
    '把對帳、通知、訂單整理自動化<br>每天少回一堆訊息，提早下班',
    '告別手動對帳地獄<br>一鍵完成繁瑣工作，專注賺錢',
    '自動化代購管理系統<br>讓你每天多出 3 小時做更重要的事',
    '不再為對帳熬夜到半夜<br>系統幫妳處理，輕鬆賺錢',
    '一鍵對帳、自動通知、買家自助查詢<br>代購管理從此變簡單',
    '把重複工作交給系統<br>你只需要專注賺錢',
    '告別 Excel 地獄<br>將時間還給採購與生活',
    '自動化對帳與通知<br>讓代購工作變得更輕鬆、更賺錢',
    '買家查詢自動化，讓你專注於 VIP 服務，而非重複問答。'
];

// Random Hero Badge
const heroBadges = [
    '給日韓/kpop/動漫/美妝代購的「對帳＋通知＋查詢」工具',
    '專為代購主打造的「自動對帳＋通知＋查詢」系統',
    '代購管理自動化工具｜對帳、通知、查詢一次搞定',
    '告別手動對帳地獄｜代購管理系統',
    '自動化代購管理｜對帳、通知、查詢整合工具',
    '代購主必備｜自動對帳與通知系統',
    '專業代購管理工具｜一鍵對帳、自動通知',
    '代購自動化系統｜對帳、通知、查詢工作流',
    '【代購專用】自動化中樞'
];

function setRandomHeroTitle() {
    const heroTitleElement = document.getElementById('hero-title');
    if (heroTitleElement) {
        const randomIndex = Math.floor(Math.random() * heroTitles.length);
        heroTitleElement.innerHTML = heroTitles[randomIndex];
    }
}

function setRandomHeroBadge() {
    const heroBadgeElement = document.getElementById('hero-badge');
    if (heroBadgeElement) {
        const randomIndex = Math.floor(Math.random() * heroBadges.length);
        heroBadgeElement.textContent = heroBadges[randomIndex];
    }
}

// Set random title and badge when page loads
function initRandomHero() {
    setRandomHeroTitle();
    setRandomHeroBadge();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRandomHero);
} else {
    initRandomHero();
}

// Demo Data
const demoData = {
    currentProject: 'cortis',
    projects: {
        cortis: {
            name: 'CORTIS 1st Mini Album [Color Outside the Lines]',
            description: 'CORTIS 出道首張迷你專輯！包含首批限定海報與通路特典小卡。',
            hasSorting: true,
            orders: [
                { id: 'ORD-CORTIS-001', name: 'yura_012', item: 'Color Outside the Lines Album', qty: 1, amount: 450, wishes: '1.Martin / 2.James', status: '待對帳', time: '' },
                { id: 'ORD-CORTIS-002', name: 'mochi_fan', item: 'Color Outside the Lines Album', qty: 2, amount: 900, wishes: '1.James / 2.Juhoon', status: '待對帳', time: '' },
                { id: 'ORD-CORTIS-003', name: 'sunshine_99', item: 'Color Outside the Lines Album', qty: 1, amount: 450, wishes: '1.Juhoon / 2.Seonghyeon', status: '待對帳', time: '' },
                { id: 'ORD-CORTIS-004', name: 'kpop_lover_x', item: 'Color Outside the Lines Album', qty: 3, amount: 1350, wishes: '1.Seonghyeon / 2.Keonho', status: '待對帳', time: '' },
                { id: 'ORD-CORTIS-005', name: 'starry_night', item: 'Color Outside the Lines Album', qty: 1, amount: 450, wishes: '1.Keonho / 2.Martin', status: '待對帳', time: '' },
                { id: 'ORD-CORTIS-006', name: 'blue_ocean', item: 'Color Outside the Lines Album', qty: 2, amount: 900, wishes: '1.Martin / 2.James', status: '待對帳', time: '' },
                { id: 'ORD-CORTIS-007', name: 'mint_choco', item: 'Color Outside the Lines Album', qty: 1, amount: 450, wishes: '1.James / 2.Juhoon', status: '待對帳', time: '' },
                { id: 'ORD-CORTIS-008', name: 'cherry_blossom', item: 'Color Outside the Lines Album', qty: 2, amount: 900, wishes: '1.Juhoon / 2.Seonghyeon', status: '待對帳', time: '' }
            ],
            reconciled: false,
            sorted: false
        },
        hunter: {
            name: '富堅義博 獵人展周邊代購',
            description: '富堅義博獵人展限定周邊商品，包含貼紙包、鑰匙圈盲包、裝飾畫等精選商品。',
            hasSorting: false,
            orders: [
                { id: 'ORD-HUNTER-001', name: 'gon_fan', item: '貼紙包', qty: 2, amount: 600, wishes: '', status: '待對帳', time: '' },
                { id: 'ORD-HUNTER-002', name: 'killua_lover', item: '鑰匙圈盲包', qty: 3, amount: 1200, wishes: '', status: '待對帳', time: '' },
                { id: 'ORD-HUNTER-003', name: 'hunter_99', item: '小傑裝飾畫', qty: 1, amount: 800, wishes: '', status: '待對帳', time: '' },
                { id: 'ORD-HUNTER-004', name: 'phantom_troupe', item: '鑰匙圈盲包', qty: 2, amount: 800, wishes: '', status: '待對帳', time: '' },
                { id: 'ORD-HUNTER-005', name: 'nen_master', item: '貼紙包', qty: 1, amount: 300, wishes: '', status: '待對帳', time: '' },
                { id: 'ORD-HUNTER-006', name: 'greed_island', item: '小傑奇犽雕像', qty: 1, amount: 2500, wishes: '', status: '待對帳', time: '' }
            ],
            reconciled: false,
            sorted: false
        },
        korea: {
            name: '韓國連線代購',
            description: '韓國美妝、服飾、周邊商品連線代購，包含面膜、保養品、流行服飾等熱門商品。',
            hasSorting: false,
            orders: [
                { id: 'ORD-KOREA-001', name: 'kbeauty_lover', item: 'Dr.Jart+ 面膜組合', qty: 2, amount: 1200, wishes: '', status: '待對帳', time: '' },
                { id: 'ORD-KOREA-002', name: 'seoul_style', item: 'Innisfree 綠茶精華', qty: 1, amount: 650, wishes: '', status: '待對帳', time: '' },
                { id: 'ORD-KOREA-003', name: 'kpop_fashion', item: '韓國流行T恤', qty: 3, amount: 2100, wishes: '', status: '待對帳', time: '' },
                { id: 'ORD-KOREA-004', name: 'kbeauty_shop', item: 'Laneige 唇膜', qty: 2, amount: 800, wishes: '', status: '待對帳', time: '' },
                { id: 'ORD-KOREA-005', name: 'seoul_buyer', item: 'Cosrx 精華液', qty: 1, amount: 550, wishes: '', status: '待對帳', time: '' },
                { id: 'ORD-KOREA-006', name: 'kstyle_fan', item: '韓國設計師包', qty: 1, amount: 1800, wishes: '', status: '待對帳', time: '' }
            ],
            reconciled: false,
            sorted: false
        }
    },
    get orders() {
        return this.projects[this.currentProject].orders;
    },
    get reconciled() {
        return this.projects[this.currentProject].reconciled;
    },
    set reconciled(value) {
        this.projects[this.currentProject].reconciled = value;
    },
    get sorted() {
        return this.projects[this.currentProject].sorted;
    },
    set sorted(value) {
        this.projects[this.currentProject].sorted = value;
    }
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
        this.renderProjects();
        this.renderOrders();
        lucide.createIcons();
    },
    switchProject(projectKey) {
        // Hide current project's orders section
        const currentOrdersSection = document.getElementById(`demo-orders-section-${demoData.currentProject}`);
        if (currentOrdersSection) {
            currentOrdersSection.classList.add('hidden');
        }
        
        demoData.currentProject = projectKey;
        this.renderProjects();
        this.updateRevenueStats();
        lucide.createIcons();
    },
    renderProjects() {
        const projectsContainer = document.getElementById('demo-projects-list');
        if (!projectsContainer) return;
        
        const projects = demoData.projects;
        projectsContainer.innerHTML = Object.keys(projects).map(key => {
            const project = projects[key];
            const totalAmount = project.orders.reduce((sum, order) => sum + order.amount, 0);
            const paidAmount = project.reconciled ? totalAmount : 0;
            const isActive = demoData.currentProject === key;
            const ordersSectionId = `demo-orders-section-${key}`;
            const hasOrdersVisible = document.getElementById(ordersSectionId) && !document.getElementById(ordersSectionId).classList.contains('hidden');
            
            return `
                <div class="project-card-wrapper">
                    <div class="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-soft border-2 ${isActive ? 'border-lilac-300' : 'border-gray-100'} transition-all cursor-pointer" onclick="demoUI.switchProject('${key}')">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div class="flex items-start md:items-center space-x-3 md:space-x-4 flex-1 min-w-0">
                                <div class="w-12 h-12 md:w-16 md:h-16 bg-lilac-50 text-lilac-400 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lilac-glow flex-shrink-0">
                                    <i data-lucide="package" class="w-6 h-6 md:w-8 md:h-8"></i>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <div class="flex flex-wrap items-center gap-2 mb-2">
                                        <span class="px-2 md:px-3 py-1 bg-lilac-50 text-lilac-500 text-[10px] font-black uppercase rounded-lg">開團中</span>
                                        <h4 class="text-base md:text-xl font-black text-gray-900 break-words">${project.name}</h4>
                                    </div>
                                    <p class="text-xs md:text-sm text-gray-400 font-medium mb-1 md:mb-2">${project.description}</p>
                                    <p class="text-[10px] md:text-xs text-gray-400 font-bold">${project.orders.length} 筆訂單 · ${project.reconciled ? '已收款' : '待收款'} NT$ ${project.reconciled ? paidAmount.toLocaleString() : totalAmount.toLocaleString()}</p>
                                </div>
                            </div>
                            ${isActive ? `
                            <button onclick="demoUI.showProjectOrders('${key}'); event.stopPropagation();" id="demo-project-toggle-${key}" class="w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 bg-dark text-white rounded-xl md:rounded-2xl text-sm md:text-base font-black hover:bg-lilac-600 transition-all flex items-center justify-center space-x-2">
                                <i data-lucide="${hasOrdersVisible ? 'chevron-up' : 'chevron-down'}" class="w-4 h-4" id="demo-toggle-icon-${key}"></i>
                                <span>查看訂單</span>
                            </button>
                            ` : ''}
                        </div>
                    </div>
                    ${isActive ? `<div id="${ordersSectionId}" class="hidden mt-4"></div>` : ''}
                </div>
            `;
        }).join('');
        lucide.createIcons();
        
        // Render orders section for active project if it exists
        if (demoData.currentProject) {
            this.renderOrdersSection(demoData.currentProject);
        }
    },
    renderOrdersSection(projectKey) {
        const ordersSectionId = `demo-orders-section-${projectKey}`;
        let ordersSection = document.getElementById(ordersSectionId);
        
        if (!ordersSection) {
            // Find the project card wrapper
            const projectCardWrapper = Array.from(document.querySelectorAll('.project-card-wrapper')).find(wrapper => {
                const card = wrapper.querySelector(`[onclick*="switchProject('${projectKey}')"]`);
                return card !== null;
            });
            
            if (projectCardWrapper) {
                ordersSection = document.createElement('div');
                ordersSection.id = ordersSectionId;
                ordersSection.className = 'hidden mt-4';
                projectCardWrapper.appendChild(ordersSection);
            } else {
                return;
            }
        }
        
        const currentProject = demoData.projects[projectKey];
        const hasSorting = currentProject.hasSorting;
        
        ordersSection.innerHTML = `
            <div class="bg-white rounded-2xl md:rounded-3xl shadow-soft border border-gray-100 overflow-hidden">
                <div class="px-4 md:px-8 py-4 md:py-6 border-b border-gray-100 flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-gray-50/30">
                    <div>
                        <h4 class="text-base md:text-lg font-black">訂單列表</h4>
                        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">共 <span id="demo-order-count-${projectKey}">${currentProject.orders.length}</span> 筆訂單</p>
                    </div>
                    <div class="flex flex-wrap gap-2 md:space-x-3">
                        <button onclick="demoUI.openReconciliationModal()" id="demo-reconcile-btn" class="flex-1 md:flex-none px-3 md:px-5 py-2 md:py-2.5 bg-dark text-white rounded-lg md:rounded-xl text-xs md:text-sm font-black hover:bg-lilac-600 transition-all flex items-center justify-center space-x-1 md:space-x-2">
                            <i data-lucide="check-circle" class="w-3 h-3 md:w-4 md:h-4"></i>
                            <span class="whitespace-nowrap">執行對帳</span>
                        </button>
                        ${hasSorting ? `
                        <button onclick="demoUI.runSorting()" id="demo-sort-btn" class="flex-1 md:flex-none px-3 md:px-5 py-2 md:py-2.5 bg-dark text-white rounded-lg md:rounded-xl text-xs md:text-sm font-black hover:bg-lilac-600 transition-all flex items-center justify-center space-x-1 md:space-x-2">
                            <i data-lucide="sparkles" class="w-3 h-3 md:w-4 md:h-4"></i>
                            <span class="whitespace-nowrap">執行配位</span>
                        </button>
                        ` : ''}
                        <button onclick="demoUI.openNotificationModal()" id="demo-notification-btn" class="flex-1 md:flex-none px-3 md:px-5 py-2 md:py-2.5 bg-dark text-white rounded-lg md:rounded-xl text-xs md:text-sm font-black hover:bg-lilac-600 transition-all flex items-center justify-center space-x-1 md:space-x-2">
                            <i data-lucide="mail" class="w-3 h-3 md:w-4 md:h-4"></i>
                            <span class="whitespace-nowrap">寄送通知</span>
                        </button>
                    </div>
                </div>
                <div class="relative">
                    <!-- Scroll hint for mobile -->
                    <div class="md:hidden absolute top-2 right-4 z-10 flex items-center space-x-1 bg-lilac-100/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <i data-lucide="chevrons-right" class="w-3 h-3 text-lilac-600 animate-pulse"></i>
                        <span class="text-[10px] font-bold text-lilac-600">左右滑動查看更多</span>
                    </div>
                    <!-- Scrollable table container with gradient fade -->
                    <div class="overflow-x-auto md:mx-0 relative demo-table-scroll">
                        <table class="w-full text-left min-w-[600px] md:min-w-0">
                            <thead>
                                <tr class="bg-surface/50 text-[9px] md:text-[10px] font-black text-gray-300 uppercase tracking-[2px]">
                                    <th class="pl-4 pr-3 md:px-8 py-2 md:py-4 sticky left-0 bg-surface/50 z-10">買家</th>
                                    <th class="px-3 md:px-8 py-2 md:py-4">商品項目</th>
                                    <th class="px-3 md:px-8 py-2 md:py-4">金額</th>
                                    ${hasSorting ? '<th class="px-3 md:px-8 py-2 md:py-4">小卡志願</th>' : ''}
                                    <th class="px-3 md:px-8 py-2 md:py-4 text-center">狀態</th>
                                    <th class="px-3 md:px-8 py-2 md:py-4">匯款時間</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-50" id="demo-orders-table-body-${projectKey}">
                                <!-- Orders will be inserted here -->
                            </tbody>
                        </table>
                        <!-- Right fade gradient to indicate scrollable -->
                        <div class="md:hidden absolute top-0 right-0 w-16 h-full pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
                    </div>
                </div>
            </div>
        `;
        
        // Render orders for this project
        this.renderOrdersForProject(projectKey);
        lucide.createIcons();
    },
    renderOrdersForProject(projectKey) {
        const tbody = document.getElementById(`demo-orders-table-body-${projectKey}`);
        if (!tbody) return;
        
        const currentProject = demoData.projects[projectKey];
        const hasSorting = currentProject.hasSorting;
        const orders = currentProject.orders;
        
        tbody.innerHTML = orders.map(order => {
            const wishesCell = hasSorting ? `
                <td class="px-3 md:px-8 py-2 md:py-4">
                    ${order.assigned ? 
                        `<div>
                            <p class="text-[10px] md:text-xs text-gray-400 mb-1">${order.wishes}</p>
                            <p class="text-xs md:text-sm font-black text-lilac-500">✓ 已分配: ${order.assigned}</p>
                        </div>` :
                        `<p class="text-xs md:text-sm font-medium text-lilac-500">${order.wishes || '-'}</p>`
                    }
                </td>
            ` : '';
            
            return `
                <tr class="hover:bg-gray-50/50 transition-colors" data-id="${order.id}">
                    <td class="pl-4 pr-3 md:px-8 py-2 md:py-4 sticky left-0 bg-white z-10 border-r border-gray-100">
                        <p class="text-xs md:text-sm font-black text-gray-900">${order.name}</p>
                    </td>
                    <td class="px-3 md:px-8 py-2 md:py-4">
                        <p class="text-xs md:text-sm font-medium text-gray-700">${order.item}${order.qty > 1 ? ` x${order.qty}` : ''}</p>
                    </td>
                    <td class="px-3 md:px-8 py-2 md:py-4">
                        <p class="text-xs md:text-sm font-black text-gray-900">NT$ ${order.amount.toLocaleString()}</p>
                    </td>
                    ${wishesCell}
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
            `;
        }).join('');
        
        document.getElementById(`demo-order-count-${projectKey}`).textContent = orders.length;
        lucide.createIcons();
    },
    backToRoleSelect() {
        document.getElementById('demo-role-select').classList.remove('hidden');
        document.getElementById('demo-fan').classList.add('hidden');
        document.getElementById('demo-seller').classList.add('hidden');
        document.getElementById('demo-fan-result').classList.add('hidden');
        document.getElementById('demo-fan-input').value = '';
        // Hide all project orders sections
        Object.keys(demoData.projects).forEach(key => {
            const section = document.getElementById(`demo-orders-section-${key}`);
            if (section) section.classList.add('hidden');
        });
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
    showProjectOrders(projectKey) {
        const targetProject = projectKey || demoData.currentProject;
        const ordersSectionId = `demo-orders-section-${targetProject}`;
        const section = document.getElementById(ordersSectionId);
        const icon = document.getElementById(`demo-toggle-icon-${targetProject}`);
        
        if (!section) {
            // Create orders section if it doesn't exist
            this.renderOrdersSection(targetProject);
            const newSection = document.getElementById(ordersSectionId);
            if (newSection) {
                newSection.classList.remove('hidden');
                if (icon) icon.setAttribute('data-lucide', 'chevron-up');
            }
        } else {
            if (section.classList.contains('hidden')) {
                section.classList.remove('hidden');
                if (icon) icon.setAttribute('data-lucide', 'chevron-up');
                // Update revenue stats when showing orders
                this.updateRevenueStats();
            } else {
                section.classList.add('hidden');
                if (icon) icon.setAttribute('data-lucide', 'chevron-down');
            }
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
        // Calculate total revenue from ALL projects
        let totalRevenue = 0;
        let totalPaid = 0;
        
        Object.values(demoData.projects).forEach(project => {
            const projectTotal = project.orders.reduce((sum, order) => sum + order.amount, 0);
            totalRevenue += projectTotal;
            if (project.reconciled) {
                totalPaid += projectTotal;
            }
        });
        
        const totalUnpaid = totalRevenue - totalPaid;
        
        const revenueStats = document.querySelectorAll('.grid.grid-cols-3 .bg-white');
        if (revenueStats.length >= 3) {
            // Update 總營收 (first card)
            const totalCard = revenueStats[0];
            const totalValue = totalCard.querySelector('p.text-lg, p.text-2xl');
            if (totalValue) {
                totalValue.textContent = `NT$ ${totalRevenue.toLocaleString()}`;
            }
            // Update 已收款 (second card)
            const paidCard = revenueStats[1];
            const paidValue = paidCard.querySelector('p.text-lg, p.text-2xl');
            if (paidValue) {
                paidValue.textContent = `NT$ ${totalPaid.toLocaleString()}`;
            }
            // Update 待收款 (third card)
            const unpaidCard = revenueStats[2];
            const unpaidValue = unpaidCard.querySelector('p.text-lg, p.text-2xl');
            if (unpaidValue) {
                unpaidValue.textContent = `NT$ ${totalUnpaid.toLocaleString()}`;
            }
        }
    },
    renderOrders() {
        // Render orders for current project
        this.renderOrdersForProject(demoData.currentProject);
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
        const orderCount = demoData.orders.length;
        const baseTimes = ['10:15', '10:32', '11:05', '11:18', '11:45', '12:10', '12:33', '13:02', '13:25', '13:48', '14:12', '14:35', '15:01', '15:22', '15:45', '16:10', '16:30', '16:55', '17:20', '17:45'];
        let totalAmount = 0;
        demoData.orders.forEach((order, index) => {
            order.status = '已對帳';
            const timeStr = baseTimes[index] || baseTimes[baseTimes.length - 1];
            order.time = `2025-12-27 ${timeStr}`;
            totalAmount += order.amount;
        });
        demoData.reconciled = true;
        
        // Update revenue stats (calculate all projects)
        this.updateRevenueStats();
        
        // Update UI
        this.renderOrdersForProject(demoData.currentProject);
        this.renderProjects(); // Update project list to show reconciled status
        const orderCountEl = document.getElementById(`demo-order-count-${demoData.currentProject}`);
        if (orderCountEl) {
            orderCountEl.textContent = demoData.orders.length;
        }
        // Update matched count in modal
        const matchedCountEl = document.getElementById('demo-matched-count');
        if (matchedCountEl) {
            matchedCountEl.textContent = demoData.orders.length;
        }
        
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
        // Check if current project supports sorting
        const currentProject = demoData.projects[demoData.currentProject];
        if (!currentProject.hasSorting) {
            return; // Don't show sorting for projects without sorting feature
        }
        
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
            // Assign based on first wish (only if wishes exist)
            if (order.wishes && order.wishes.trim()) {
                const firstWish = order.wishes.split('/')[0].trim().split('.')[1].trim();
                order.assigned = firstWish;
            }
            
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
            title: '小卡配位系統',
            description: '基於下單順序與志願序自動完成最公平的配位工作，並保留每筆配位紀錄，方便回查與對外說明。',
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
        const pointsEl = document.getElementById('feature-points');
        
        // Update text content
        if (titleEl) titleEl.textContent = data.title;
        if (descEl) descEl.textContent = data.description;
        
        // Show/hide feature points for sorting
        if (pointsEl) {
            if (tabName === 'sorting') {
                pointsEl.classList.remove('hidden');
                // Reinitialize icons
                lucide.createIcons();
            } else {
                pointsEl.classList.add('hidden');
            }
        }
        
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
        if (!activeTab) return;
        
        // Find the video container (the sticky wrapper div)
        const videoContainer = document.getElementById('feature-video-wrapper') ||
                               document.querySelector('.lg\\:sticky') || 
                               document.querySelector('[class*="lg:sticky"]');
        
        if (!videoContainer) return;
        
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
                // Find the tabs container
                const tabsContainer = document.querySelector('.space-y-3, .space-y-4');
                if (tabsContainer && tabsContainer.contains(videoContainer)) {
                    // Remove from tabs container
                    videoContainer.remove();
                    // Append to grid container (will be on right side due to grid layout)
                    gridContainer.appendChild(videoContainer);
                }
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
});

// Quiz UI Controller
const quizUI = {
    init() {
        const quizForm = document.getElementById('quiz-form');
        if (quizForm) {
            quizForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.calculateResult();
            });
        }
    },

    calculateResult() {
        const checkboxes = document.querySelectorAll('#quiz-form input[type="checkbox"]:checked');
        const score = checkboxes.length * 10; // Each question is 10 points
        
        this.showResult(score);
    },

    showResult(score) {
        const formContainer = document.getElementById('quiz-form-container');
        const resultContainer = document.getElementById('quiz-result-container');
        const resultIcon = document.getElementById('quiz-result-icon');
        const resultTitle = document.getElementById('quiz-result-title');
        const resultScore = document.getElementById('quiz-result-score');
        const resultDescription = document.getElementById('quiz-result-description');
        const ctaButton = document.getElementById('quiz-cta-button');

        // Hide form, show result
        formContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        // Determine result based on score
        let iconClass, scoreColorClass, title, description, ctaText;
        
        if (score >= 70) {
            // 70分以上：很需要換系統
            iconClass = 'bg-red-50 text-red-500';
            scoreColorClass = 'text-2xl font-black mb-6 text-red-500';
            title = '全中的話，別猶豫了。妳值得更好的工作方式。';
            description = '妳的代購模式已經嚴重影響工作效率了！K-Link Pro 可以幫妳自動化對帳、通知和查詢，讓妳每天至少省下 2-3 小時，專注在真正重要的事情上。';
            ctaText = '領取我的自動化救星 (免費試用)';
        } else if (score >= 50) {
            // 50分以上：還在咬牙死撐，也可以換
            iconClass = 'bg-amber-50 text-amber-500';
            scoreColorClass = 'text-2xl font-black mb-6 text-amber-500';
            title = '妳還在咬牙死撐嗎？';
            description = '雖然目前還能應付，但隨著訂單增加，問題只會越來越嚴重。現在就開始使用 K-Link Pro，讓系統幫妳分擔工作，未來擴展時才不會手忙腳亂。';
            ctaText = '領取我的自動化救星 (免費試用)';
        } else if (score >= 30) {
            // 30-40分：推薦可以換系統
            iconClass = 'bg-blue-50 text-blue-500';
            scoreColorClass = 'text-2xl font-black mb-6 text-blue-500';
            title = '是時候升級妳的工作方式了！';
            description = '雖然目前還能應付，但 K-Link Pro 可以讓妳的工作更輕鬆、更有效率。自動化對帳和通知功能，讓妳有更多時間專注在業務拓展上。';
            ctaText = '領取我的自動化救星 (免費試用)';
        } else {
            // 10-20分：工作模式還很健康，也可以看看系統
            iconClass = 'bg-green-50 text-green-500';
            scoreColorClass = 'text-2xl font-black mb-6 text-green-500';
            title = '妳目前的工作模式還很健康！';
            description = '不過，隨著業務成長，K-Link Pro 可以幫妳提前準備好自動化工具。現在就開始熟悉系統，未來訂單增加時就能無縫接軌，輕鬆應對。';
            ctaText = '先看看系統能為我做什麼 (免費試用)';
        }

        // Set icon
        resultIcon.className = `w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-soft ${iconClass}`;
        const iconElement = document.createElement('i');
        if (score >= 70) {
            iconElement.setAttribute('data-lucide', 'alert-circle');
        } else if (score >= 50) {
            iconElement.setAttribute('data-lucide', 'trending-up');
        } else if (score >= 30) {
            iconElement.setAttribute('data-lucide', 'lightbulb');
        } else {
            iconElement.setAttribute('data-lucide', 'check-circle');
        }
        resultIcon.innerHTML = '';
        resultIcon.appendChild(iconElement);
        lucide.createIcons();

        // Set content
        resultTitle.textContent = title;
        resultScore.textContent = `測驗分數：${score} 分`;
        resultScore.className = scoreColorClass;
        resultDescription.textContent = description;
        ctaButton.textContent = ctaText;

        // Smooth scroll to result
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },

    resetQuiz() {
        const formContainer = document.getElementById('quiz-form-container');
        const resultContainer = document.getElementById('quiz-result-container');
        const checkboxes = document.querySelectorAll('#quiz-form input[type="checkbox"]');

        // Uncheck all checkboxes
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        // Hide result, show form
        resultContainer.classList.add('hidden');
        formContainer.classList.remove('hidden');

        // Scroll to form
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

// Initialize quiz when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        quizUI.init();
    });
} else {
    quizUI.init();
}

// FAQ Accordion Controller
const faqUI = {
    toggle(index) {
        const faqItem = document.querySelector(`[data-faq="${index}"]`);
        if (!faqItem) return;

        const answer = faqItem.querySelector('.faq-answer');
        const icon = faqItem.querySelector('.faq-icon');
        const isOpen = !answer.classList.contains('hidden');

        if (isOpen) {
            // Close
            answer.classList.add('hidden');
            if (icon) icon.style.transform = 'rotate(0deg)';
        } else {
            // Open
            answer.classList.remove('hidden');
            if (icon) icon.style.transform = 'rotate(180deg)';
        }

        // Reinitialize icons after toggle
        lucide.createIcons();
    }
};
