document.addEventListener("DOMContentLoaded",
    function (event) {

        document.querySelector("button")
            .addEventListener("click", function() {
                var self = this;
                var name = "";

                $ajaxUtils
                    .sendGetRequest("/data/namee.txt",
                    function(request) {
                        self.name = request.responseText;
                    });

                document.querySelector("#content")
                        .innerHTML = "<h2> Hello </h2>" +
                            self.name + "!";
            });
    }
);