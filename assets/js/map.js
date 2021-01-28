var markers = [];
function khoiTaoBanDo() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 21.053906637939466, lng: 105.82588180343846 },
    });

    // var markers = [];
    var locations = [
        {
            name: 'Sân vận động Mỹ Đình',
            location: {
                lat: 21.020563972349194,
                lng: 105.76519045369717
            },
            content: {
                title: 'Tour Khám phá Sân vận động Mỹ Đình',
                image: './assets/images/tour.png',
                detail: {
                    schedule: '3 ngày 2 đêm - 5 điểm',
                    vehicle: 'Xe ô tô'
                }
            }
        },
        {
            name: 'Hồ Tây',
            location: {
                lat: 21.053906637939466,
                lng: 105.82588180343846
            },
            content: {
                title: 'Tour Khám phá Hồ Tây',
                image: './assets/images/tour.png',
                detail: {
                    schedule: '3 ngày 2 đêm - 5 điểm',
                    vehicle: 'Xe ô tô'
                }
            }
        },
        {
            name: 'Dolphin Plaza',
            location: {
                lat: 21.03050928336818,
                lng: 105.77657279789653
            },
            content: {
                title: 'Tour khám phá Dolphin Plaza abc xyz def abc xyz def abc xyz def^^',
                image: 'https://media.bizwebmedia.net/Sites/29044/data/upload/dolphin_plaza_2(1).jpg?0',
                detail: {
                    schedule: '5 ngày 4 đêm - 10 điểm',
                    vehicle: 'Xe buýt =))'
                }
            }
        }

    ];

    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < locations.length; i++) {
        var newMarker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i].location.lat, locations[i].location.lng),
            map: map,
            label: {
                color: '#F7A61D',
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '16px',
                text: locations[i].content.title,
            },
            icon: {
                labelOrigin: new google.maps.Point(11, 40),
                url: './assets/images/ic-location.png'
            }
        });

        google.maps.event.addListener(newMarker, 'click', (function (newMarker, i) {
            return function () {
                const content = `
                    <div class="info-window">
                    <div class="info-image">
                        <img src="${locations[i].content.image}" alt="${locations[i].content.title}">
                    </div>
                    <div class="info-content">
                        <p class="info-title" style="font-weight: 600;">${locations[i].content.title}</p>
                    <p class="info-detail schedule" style="font-weight: 400;">${locations[i].content.detail.schedule}</p>
                    <p class="info-detail vehicle" style="font-weight: 400;">${locations[i].content.detail.vehicle}</p>
                    </div>
                </div>
                `;
                infowindow.setContent(content);
                infowindow.open(map, newMarker);
            }
        })(newMarker, i));

        markers.push(newMarker);
    }
}

$(document).ready(function() {
    $('.destination-page .tour-item').on('click', function (e) {
        console.log('click', $(this));
        e.preventDefault();
        let index = $('.destination-page .tour-item').index($(this));

        new google.maps.event.trigger( markers[index], 'click' );
    })
})