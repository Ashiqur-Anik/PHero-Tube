const hendeleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');
    data.data.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="hendeleData('${element.category_id}')" class="tab text-black text-xl bg-gray-500 hover:bg-pink-700 rounded-md mt-5 mx-5">${element.category}</a>
        `;

        tabContainer.appendChild(div);
        element.innerHTML = '';
    });

};


const hendeleData = async (createData) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${createData}`)
    const data = await response.json();
    
    const cardContainer = document.getElementById('card-container');
    const drawingContainer = document.getElementById('drawing-container');
    cardContainer.innerHTML = '';

    if (data.data.length === 0) {
        drawingContainer.classList.remove('hidden')
    }
    else {
        drawingContainer.classList.add('hidden')
    }

    data.data.forEach((content) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card h-96 mx-auto bg-white shadow-xl">
            <figure class="h-[50%]">
                <img class="w-100% h-60" src="${content.thumbnail}">
            </figure>
            <div class="card-body">
               <div class="flex">
                    <img class="w-12 h-12 rounded-full" src="${content.authors[0].profile_picture}" alt="">
                   <h2 class="card-title ml-3 text-xl">${content.title}</h2>
                </div>
               <h1 class="text-xl">${content.authors[0].profile_name}</h1>
               <h1>${content.others.views} Views</h1>
            </div>
        </div>
       `;
        cardContainer.appendChild(div);

    });

};


hendeleCategory();
hendeleData('1000');

