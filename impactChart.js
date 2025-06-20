document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('impactChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Women Reached'],
            datasets: [{
                label: 'Target Audience',
                data: [2400],
                backgroundColor: ['#D9534F'],
                borderColor: ['#FFFFFF'],
                borderWidth: 4,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    backgroundColor: '#3D3D3D',
                    titleFont: { size: 16, weight: 'bold' },
                    bodyFont: { size: 14 },
                    callbacks: {
                        label: function(context) {
                            return ` ${context.parsed} women targeted`;
                        }
                    }
                }
            }
        }
    });
});
