// ============================================
// PROGRESS TRACKER - Update this as you publish
// ============================================

const progressData = {
    modules: [
        {
            name: "Algorithms & Logic",
            status: "in-progress", // 'completed', 'in-progress', 'not-started'
            totalPosts: 18,
            completedPosts: 1  // ← UPDATE: change to 2 after publishing post #2
        },
        {
            name: "Java Basics",
            status: "not-started",
            totalPosts: 25,
            completedPosts: 0
        },
        {
            name: "OOP & Advanced",
            status: "not-started",
            totalPosts: 15,
            completedPosts: 0
        }
    ]
};

// Calculate overall progress percentage
function calculateOverallProgress() {
    let totalPosts = 0;
    let completedPosts = 0;
    
    progressData.modules.forEach(module => {
        totalPosts += module.totalPosts;
        completedPosts += module.completedPosts;
    });
    
    return Math.round((completedPosts / totalPosts) * 100);
}

// Generate HTML for progress display
function generateProgressHTML() {
    const overall = calculateOverallProgress();
    
    let html = `
    <div class="progress-container">
        <h3>📊 Overall Progress</h3>
        <div class="progress-bar-wrapper">
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${overall}%;">
                    <span class="progress-percent">${overall}%</span>
                </div>
            </div>
        </div>
        
        <div class="modules-grid">
    `;
    
    progressData.modules.forEach(module => {
        const percentage = module.totalPosts > 0 
            ? Math.round((module.completedPosts / module.totalPosts) * 100) 
            : 0;
        
        let statusText = '';
        let statusClass = '';
        
        if (module.status === 'completed') {
            statusText = '✅ Completed';
            statusClass = 'status-completed';
        } else if (module.status === 'in-progress') {
            statusText = '🟢 In Progress';
            statusClass = 'status-progress';
        } else {
            statusText = '⚪ Not Started';
            statusClass = 'status-pending';
        }
        
        html += `
            <div class="module-card">
                <div class="module-header">
                    <span class="module-name">${module.name}</span>
                    <span class="module-status ${statusClass}">${statusText}</span>
                </div>
                <div class="progress-bar-wrapper small">
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width: ${percentage}%;"></div>
                    </div>
                </div>
                <div class="module-stats">
                    ${module.completedPosts} / ${module.totalPosts} posts
                </div>
            </div>
        `;
    });
    
    html += `
        </div>
    </div>
    `;
    
    return html;
}

// Auto-update: Run when page loads
document.addEventListener('DOMContentLoaded', function() {
    const tracker = document.getElementById('progress-tracker');
    if (tracker) {
        tracker.innerHTML = generateProgressHTML();
    }
});
