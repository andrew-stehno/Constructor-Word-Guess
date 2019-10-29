let Letter = function(placeHolder) {
    this.placeHolder = placeHolder,
    this.value = false,
    this.guess = function() {
        if(this.value) {
            return placeHolder;
        }
        return "_";
    }

    this.update = function(x) {
        if (x === placeHolder) {
            this.value = true;
        }
    }
};


module.exports = {
    Letter
};