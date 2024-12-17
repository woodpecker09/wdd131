document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button[type="submit"]');
    const list = document.querySelector('#list');

    // --------week 05--------
    let chaptersArray = getChapterList() || [];

    chaptersArray.forEach(chapter => {
        displayList(chapter);
      });

    button.addEventListener('click', () => {
        if (input.value.trim() !== '') {  // make sure the input is not empty
        
            displayList(input.value); // call the function that outputs the submitted chapter
            chaptersArray.push(input.value);  // add the chapter to the array
            setChapterList(); // update the localStorage with the new array
            input.value = ''; // clear the input
            input.focus(); // set the focus back to the input
        }
    });
    
    function displayList(item){
        const li = document.createElement('li'); 
        const deleteButton = document.createElement('button');         
        li.textContent = item;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            deleteChapter(li.textContent);
            item.focus();
        });
    }
    
    function setChapterList(){
        localStorage.setItem('BOMFavoriteList', JSON.stringify(chaptersArray));
    }
    
    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
    }
        
    
    function getChapterList(){
        return JSON.parse(localStorage.getItem('BOMFavoriteList'))
    }


    // ----------------------
    // button.addEventListener('click', function() {
    //     if (input.value.trim() !== '') {
    //         const li = document.createElement('li'); 
    //         const deleteButton = document.createElement('button');         
    //         li.textContent = input.value;
    //         deleteButton.textContent = '❌';
    //         li.append(deleteButton);
    //         list.append(li);
    //         input.value = '';
    //         input.focus();
            
    //         deleteButton.addEventListener('click', function () {
    //             list.removeChild(li);
    //             input.focus();
    //         });
    //     }
    // });

   
});
