function Letter(placeHolder) {
    this.placeHolder = placeHolder;
    this.value = false;
    this.getCurrentValue = function() {
        if(this.value) {
            return placeHolder;
        }
        return "_";
    }

    this.checkLetter = function(x) {
        if (x.toLowerCase() === placeHolder.toLowerCase()) {
            this.value = true;
        }
    }
};


module.exports = {
    Letter
};