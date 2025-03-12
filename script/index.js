const videosContainer = document.getElementById('video-container')

// For loading dynamic buttons
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategory(data.categories));
}

function displayCategory(data) {
    for (const cat of data) {
        const categoryBtnContainer = document.getElementById('category-btn-container');
        const catBtn = document.createElement('button')
        catBtn.innerHTML = `
            <button onclick="loadMusicVideos()" class="btn btn-sm active">${cat.category}</button>
        `
        categoryBtnContainer.append(catBtn)
    }
}

const activeBtns = document.getElementsByClassName('active')
for (let whitebtn of activeBtns) {
    whitebtn.addEventListener('click', () => {
        whitebtn.classList.add('red')
    })
}





// For Loading Videos using API
const loadAllVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((ref) => ref.json())
        .then((videosAPI) => showVideos(videosAPI.videos));
    videosContainer.innerHTML = ''
}

const loadMusicVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/category/1001')
        .then((ref) => ref.json())
        .then((videosAPI) => showVideos(videosAPI.category));
    videosContainer.innerHTML = ''
}




function showVideos(videos) {

    for (const video of videos) {
        const newVideos = document.createElement('div')
        newVideos.innerHTML = `
            <div class="card bg-base-100 shadow-md">
                <figure class="relative">
                <img src="${video.thumbnail}" alt="Shoes" class="object-cover w-full h-[150px]" />
                    <p class="absolute right-2 bottom-2 text-[12px] py-1 bg-black text-white px-2 rounded-sm">3hrs 56 min ago</p>
                </figure>
                <div class="flex items-start gap-4 mt-4">
                    <div class="avatar w-8 h-8">
                        <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                    <div class="pb-3">
                        <h1 class="font-semibold text-xl">${video.title}</h1>
                        <div class="flex items-center gap-3">
                            <p class="text-gray-500 font-medium">${video.authors[0].profile_name}</p>
                            ${video.authors[0].verified === true ? `<img src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png" class="w-6" alt="">` : ``}
                            
                        </div>
                        <p class="text-gray-500">${video.others.views}</p>
                    </div>
                </div>
            </div>
        `
        videosContainer.append(newVideos)
    }
}


// Call all the load function at below.
loadCategory()
