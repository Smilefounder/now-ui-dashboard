demo = {
    initPickColor: function(){
        $('.pick-class-label').click(function(){
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if(display_div.length) {
            var display_buttons = display_div.find('.btn');
            display_buttons.removeClass(old_class);
            display_buttons.addClass(new_class);
            display_div.attr('data-class', new_class);
            }
        });
    },

    initDocumentationCharts: function(){
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

        dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);
    },

    initDashboardPageCharts: function(){

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        Chartist.Pie('#chartPreferences', {
          labels: ['62%','32%','10%'],
          series: [62, 32, 10]
        });


        var dataSales = {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [
             [287, 385, 490, 492, 554, 586, 698, 695, 752]
          ]
        };

        var optionsSales = {
          lineSmooth: false,
          low: 0,
          high: 800,
           chartPadding: 0,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          axisY: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 6
          }),
          showLine: false,
          showPoint: true,
          fullWidth: true
        };

        var responsiveSales = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        var chartHours = Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);

        nowuiDashboard.startAnimationForLineChart(chartHours);

        var data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
          ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        var chartActivity = Chartist.Bar('#chartActivity', data, options, responsiveOptions);

        nowuiDashboard.startAnimationForBarChart(chartActivity);

        // /* ----------==========     Daily Sales Chart initialization    ==========---------- */
        //
        // dataDailySalesChart = {
        //     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        //     series: [
        //         [12, 17, 7, 17, 23, 18, 38]
        //     ]
        // };
        //
        // optionsDailySalesChart = {
        //     lineSmooth: Chartist.Interpolation.cardinal({
        //         tension: 0
        //     }),
        //     low: 0,
        //     high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        //     chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        // }
        //
        // var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        //
        // nowuiDashboard.startAnimationForLineChart(dailySalesChart);
        //
        //
        //
        // /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        //
        // dataCompletedTasksChart = {
        //     labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
        //     series: [
        //         [230, 750, 450, 300, 280, 240, 200, 190]
        //     ]
        // };
        //
        // optionsCompletedTasksChart = {
        //     lineSmooth: Chartist.Interpolation.cardinal({
        //         tension: 0
        //     }),
        //     low: 0,
        //     high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        //     chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        // }
        //
        // var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        //
        // // start animation for the Completed Tasks Chart - Line Chart
        // nowuiDashboard.startAnimationForLineChart(completedTasksChart);
        //
        //
        // /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        //
        // var dataEmailsSubscriptionChart = {
        //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //   series: [
        //     [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
        //
        //   ]
        // };
        // var optionsEmailsSubscriptionChart = {
        //     axisX: {
        //         showGrid: false
        //     },
        //     low: 0,
        //     high: 1000,
        //     chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
        // };
        // var responsiveOptions = [
        //   ['screen and (max-width: 640px)', {
        //     seriesBarDistance: 5,
        //     axisX: {
        //       labelInterpolationFnc: function (value) {
        //         return value[0];
        //       }
        //     }
        //   }]
        // ];
        // var emailsSubscriptionChart = Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
        //
        // //start animation for the Emails Subscription Chart
        // nowuiDashboard.startAnimationForBarChart(emailsSubscriptionChart);

    },

    initGoogleMaps: function(){
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
          zoom: 13,
          center: myLatlng,
          scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
          styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

	showNotification: function(from, align){
    	color = 'primary';

    	$.notify({
        	icon: "now-ui-icons ui-1_bell-53",
        	message: "Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer."

        },{
            type: color,
            timer: 8000,
            placement: {
                from: from,
                align: align
            }
        });
	}



}
