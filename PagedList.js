class PagedList{
    constructor(_items, _pageSize){
        this.Items = _items;
        this.PageSize = _pageSize;
        this.PageNumber = 1;
        this.Filter = null;
    }

    GetPagedItems(){
        let startIndex = (this.PageNumber-1) * this.PageSize;
        let filteredItems = this.Items.slice(0);
        if(this.Filter){
            filteredItems = filteredItems.filter(this.Filter);
        }
        let pagedItems = filteredItems.slice(startIndex,startIndex+this.PageSize);
        return pagedItems;
    }
    
    GoTo(_pageNumber){
        this.PageNumber = _pageNumber;
        return this.GetPagedItems();
    }

    GetTotalPages(){
        var totalPages = this.Items.length/this.PageSize;
        if(Math.round(totalPages)<totalPages){
            return Math.round(totalPages)+1;
        }else{
            return Math.round(totalPages);
        }
    }
}

//testing
// var arr = [];
// for(let i=1; i<=41; i++){
//     arr.push(`Item #${i}`);
// }
// var foo = new PagedList(arr, 10);
// var numRemove = "5";
// foo.Filter = function(item){
//     return !item.includes(numRemove);
// };
// console.log(foo.GetPagedItems());
// numRemove = "3";
// console.log(foo.GetPagedItems());