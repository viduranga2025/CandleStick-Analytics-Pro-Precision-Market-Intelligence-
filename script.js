const ChartEngine = {
    // Navigation Action: Switch Chart Type
    switchType(type, element) {
        const chart = document.getElementById('main-chart');
        
        // UI Action: Update Button
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        element.classList.add('active');

        // Logic Action: Change Visual Mode
        chart.className = `chart-visual ${type}-mode`;
        
        console.log(`[ACTION] Chart mode changed to: ${type}`);
        this.renderData(); // Re-render with new style
    },

    // Action: Update Timeframe
    updateTimeframe(tf) {
        document.querySelectorAll('.timeframe-selector button').forEach(b => b.classList.remove('active'));
        event.target.classList.add('active');
        
        console.log(`[ACTION] Timeframe updated to: ${tf}`);
        this.renderData();
    },

    renderData() {
        const container = document.getElementById('main-chart');
        container.innerHTML = ''; // Clear current

        // Mock Candle Generation
        for(let i=0; i<20; i++) {
            const height = Math.floor(Math.random() * 80) + 10;
            const isRed = Math.random() > 0.5;
            const candle = document.createElement('div');
            candle.className = `candle ${isRed ? 'red' : ''}`;
            candle.style.height = `${height}%`;
            container.appendChild(candle);
        }
    }
};

window.onload = () => ChartEngine.renderData();