class PagedList{
    constructor(_items, _pageSize){
        this.Items = _items || [];
        this.PageSize = _pageSize || 10;
        this.PageNumber = 1;
    }
    
    GetPagedItems(){
        let startIndex = (this.PageNumber-1) * this.PageSize;
        let pagedItems = this.Items.slice(startIndex,startIndex+this.PageSize);
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

/*testing*/
var arr = [];
for(let i=1; i<=43; i++){
    arr.push(`Item #${i}`);
}
var foo = new PagedList(arr, 10);
var numRemove = "5";
console.log(foo.GetTotalPages());
console.log(foo.GetPagedItems());
numRemove = "3";
console.log(foo.GoTo(4));
console.log(foo.GoTo(2));