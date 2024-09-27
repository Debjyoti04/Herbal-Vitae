document.addEventListener('DOMContentLoaded', function() {

// Video preloader functionality
const videoPreloader = document.getElementById('video-preloader');
const preloaderVideo = document.getElementById('preloader-video');
const mainContent = document.getElementById('main-content');

// Hide the preloader and show the main content after the video ends
preloaderVideo.addEventListener('ended', function() {
  videoPreloader.style.display = 'none'; // Hide the preloader
  mainContent.style.display = 'block';   // Show the main content
});

    // Define the information for each state
    const stateData = {

        
        INAN: {
            name: 'Andaman and Nicobar',
            items: ['Clove (Syzygium aromaticum)', 'Lemongrass (Cymbopogon citratus)', 'Betel Leaf (Piper betle)'],
            image: './assets/login-background.jpg' // Image for Andaman and Nicobar
        },
        INTG: {
            name: 'Telangana',
            items: ['Turmeric (Curcuma longa)', 'Amla (Phyllanthus emblica)', 'Tulsi (Ocimum tenuiflorum)'],
            image: './assets/3.jpg' // Image for Telangana
        },
            INAP: {
                name: 'Andhra Pradesh',
                items: ['Ashwagandha (Withania somnifera)', 'Neem (Azadirachta indica)', 'Curry Leaves (Murraya koenigii)']
            },
            INAR: {
                name: 'Arunachal Pradesh',
                items: ['Mishmi Teeta (Coptis teeta)', 'Rhododendron (Rhododendron arboreum)', 'Aconite (Aconitum ferox)']
            },
            INAS: {
                name: 'Assam',
                items: ['Holy Basil (Ocimum sanctum)', 'Black Pepper (Piper nigrum)', 'Long Pepper (Piper longum)']
            },
            INBR: {
                name: 'Bihar',
                items: ['Brahmi (Bacopa monnieri)', 'Kalmegh (Andrographis paniculata)', 'Sarpagandha (Rauvolfia serpentina)']
            },
            INCH: {
                name: 'Chandigarh',
                items: ['Aloe Vera (Aloe barbadensis miller)', 'Lemongrass (Cymbopogon citratus)', 'Mint (Mentha spicata)']
            },
            INCT: {
                name: 'Chhattisgarh',
                items: ['Chirchita (Achyranthes aspera)', 'Brahmi (Bacopa monnieri)', 'Giloy (Tinospora cordifolia)']
            },
            INDH: {
                name: 'Dadra and Nagar Haveli and Daman and Diu',
                items: ['Neem (Azadirachta indica)', 'Tulsi (Ocimum tenuiflorum)', 'Lemongrass (Cymbopogon citratus)']
            },
            INDL: {
                name: 'Delhi',
                items: ['Ashwagandha (Withania somnifera)', 'Brahmi (Bacopa monnieri)', 'Tulsi (Ocimum tenuiflorum)']
            },
            INGA: {
                name: 'Goa',
                items: ['Cinnamon (Cinnamomum verum)', 'Curry Leaves (Murraya koenigii)', 'Nutmeg (Myristica fragrans)']
            },
            INGJ: {
                name: 'Gujarat',
                items: ['Guggul (Commiphora wightii)', 'Amla (Phyllanthus emblica)', 'Isabgol (Plantago ovata)']
            },
            INHR: {
                name: 'Haryana',
                items: ['Brahmi (Bacopa monnieri)', 'Neem (Azadirachta indica)', 'Giloy (Tinospora cordifolia)']
            },
            INHP: {
                name: 'Himachal Pradesh',
                items: ['Wild Himalayan Cherry (Prunus cerasoides)', 'Rhododendron (Rhododendron arboreum)', 'Burdock (Arctium lappa)']
            },
            INJH: {
                name: 'Jharkhand',
                items: ['Alovera (Aloe barbadensis)', 'Kalmegh (Andrographis paniculata)', 'Baheda (Terminalia bellirica)']
            },
            INKA: {
                name: 'Karnataka',
                items: ['Sandalwood (Santalum album)', 'Betel Leaf (Piper betle)', 'Guggul (Commiphora wightii)']
            },
            INKL: {
                name: 'Kerala',
                items: ['Cardamom (Elettaria cardamomum)', 'Black Pepper (Piper nigrum)', 'Turmeric (Curcuma longa)']
            },
            INMP: {
                name: 'Madhya Pradesh',
                items: ['Safed Musli (Chlorophytum borivilianum)', 'Ashwagandha (Withania somnifera)', 'Neem (Azadirachta indica)']
            },
            INMH: {
                name: 'Maharashtra',
                items: ['Nagkesar (Mesua ferrea)', 'Kokum (Garcinia indica)', 'Bael (Aegle marmelos)']
            },
            INMN: {
                name: 'Manipur',
                items: ['Zanthoxylum (Zanthoxylum acanthopodium)', 'Ginseng (Panax ginseng)', 'Moringa (Moringa oleifera)']
            },
            INML: {
                name: 'Meghalaya',
                items: ['Lakadong Turmeric (Curcuma longa)', 'Bay Leaf (Cinnamomum tamala)', 'Black Cardamom (Amomum subulatum)']
            },
            INMZ: {
                name: 'Mizoram',
                items: ['Lemongrass (Cymbopogon citratus)', 'Ginger (Zingiber officinale)', 'Chirata (Swertia chirata)']
            },
            INNL: {
                name: 'Nagaland',
                items: ['Ginger (Zingiber officinale)', 'Perilla (Perilla frutescens)', 'Black Sesame (Sesamum indicum)']
            },
            INOR: {
                name: 'Odisha',
                items: ['Kalmegh (Andrographis paniculata)', 'Sarpagandha (Rauvolfia serpentina)', 'Tulsi (Ocimum tenuiflorum)']
            },
            INPY: {
                name: 'Puducherry',
                items: ['Aloe Vera (Aloe barbadensis miller)', 'Betel Leaf (Piper betle)', 'Mint (Mentha spicata)']
            },
            INPB: {
                name: 'Punjab',
                items: ['Amla (Phyllanthus emblica)', 'Tulsi (Ocimum tenuiflorum)', 'Ashwagandha (Withania somnifera)']
            },
            INRJ: {
                name: 'Rajasthan',
                items: ['Safed Musli (Chlorophytum borivilianum)', 'Guggul (Commiphora wightii)', 'Amla (Phyllanthus emblica)']
            },
            INSK: {
                name: 'Sikkim',
                items: ['Large Cardamom (Amomum subulatum)', 'Rhododendron (Rhododendron arboreum)', 'Yarchagumba (Ophiocordyceps sinensis)']
            },
            INTN: {
                name: 'Tamil Nadu',
                items: ['Vetiver (Chrysopogon zizanioides)', 'Tulsi (Ocimum tenuiflorum)', 'Neem (Azadirachta indica)']
            },
            INTR: {
                name: 'Tripura',
                items: ['Ginger (Zingiber officinale)', 'Betel Leaf (Piper betle)', 'Bay Leaf (Cinnamomum tamala)']
            },
            INUP: {
                name: 'Uttar Pradesh',
                items: ['Ashwagandha (Withania somnifera)', 'Tulsi (Ocimum tenuiflorum)', 'Neem (Azadirachta indica)']
            },
            INUT: {
                name: 'Uttarakhand',
                items: ['Rhododendron (Rhododendron arboreum)', 'Burdock (Arctium lappa)', 'Kalmegh (Andrographis paniculata)']
            },
            INWB: {
                name: 'West Bengal',
                items: ['Kalmegh (Andrographis paniculata)', 'Betel Leaf (Piper betle)', 'Sarpagandha (Rauvolfia serpentina)']
            },
            INLD: {
                name: 'Lakshadweep',
                items: ['Coconut (Cocos nucifera)', 'Betel Leaf (Piper betle)', 'Turmeric (Curcuma longa)']
            },
            INJK: {
                name: 'Jammu and Kashmir',
                items: ['Saffron (Crocus sativus)', 'Lavender (Lavandula angustifolia)', 'Hing (Ferula assa-foetida)']
            },
            INLA: {
                name: 'Ladakh',
                items: ['Sea Buckthorn (Hippophae rhamnoides)', 'Rhodiola (Rhodiola rosea)', 'Yarchagumba (Ophiocordyceps sinensis)']
            }
        };
        
        
    
    

    // Create the tooltip element
    const tooltip = document.createElement('div');
    tooltip.setAttribute('id', 'state-tooltip');
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = 'white';
    tooltip.style.border = '1px solid black';
    tooltip.style.padding = '5px';
    tooltip.style.display = 'none';
    document.body.appendChild(tooltip);

    // Get the modal elements
    const modal = document.getElementById('state-modal');
    const modalContent = document.getElementById('modal-state-info');
    const closeModal = document.querySelector('.close');

    // Function to display the list in the modal
    function displayStateInfo(stateId) {
        const stateInfo = stateData[stateId];
        if (stateInfo) {
            const htmlList = `
                <h3>${stateInfo.name}</h3>
                <ul>
                    ${stateInfo.items.map(item => `<li><a href="http://localhost:5173${item.toLowerCase().replace(/\s+/g, '-')}" target="http://localhost:5173">${item}</a></li>`).join('')}
                </ul>
            `;
            modalContent.innerHTML = htmlList;
            modal.style.display = 'block'; // Show the modal
        }
    }
    
    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when the user clicks outside of the modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Add hover and click event listeners to each state
    Object.keys(stateData).forEach(stateId => {
        const stateElement = document.getElementById(stateId);
        if (stateElement) {
            // Hover event to show tooltip
            stateElement.addEventListener('mouseover', function(event) {
                tooltip.innerText = stateData[stateId].name;
                tooltip.style.left = event.pageX + 'px';
                tooltip.style.top = event.pageY + 'px';
                tooltip.style.display = 'block';
            });

            // Move tooltip with mouse
            stateElement.addEventListener('mousemove', function(event) {
                tooltip.style.left = event.pageX + 'px';
                tooltip.style.top = event.pageY + 'px';
            });

            // Hide tooltip when not hovering
            stateElement.addEventListener('mouseout', function() {
                tooltip.style.display = 'none';
            });

            // Click event to display state information in the modal
            stateElement.addEventListener('click', function() {
                displayStateInfo(stateId);
            });
        }
    });
});
