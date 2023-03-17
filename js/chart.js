(function () {
    Vue.component("pie-chart", {
        extends: VueChartJs.Pie,
        mounted() {
            this.renderChart({
                // labels: [],
                datasets: [{
                    backgroundColor: ["#FF4B72", "#96A1B0", "#41B883", "#048CE9"],
                    data: [30, 50, 5, 15]
                }]
            }, {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    enabled: false
                }
            });
        }
    });

    var vm = new Vue({
        el: ".app",
        data: {
            show: false,
            message: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Data One",
                    backgroundColor: "#f87979",
                    data: [40, 39, 10, 40, 39, 80, 40]
                }]
            }
        },

        mounted() {

        }
    });
})();