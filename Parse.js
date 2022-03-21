function ParseData(data){

    var Link = document.createElement("link")
    Link.rel = "preconnect"
    Link.href = "https://fonts.googleapis.com"
    document.head.append(Link)
    
    var Link = document.createElement("link")
    Link.rel = "preconnect"
    Link.href = "https://fonts.gstatic.com"
    document.head.append(Link)

    var Link = document.createElement("link")
    Link.rel = "stylesheet"
    Link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
    document.head.append(Link)
    
    
    var style = document.createElement("style")
    style.innerText = "p{display: inline;} div{display: inline; font-family: 'Roboto', sans-serif;}"

    document.head.append(style)

    //Make the color change
    ParsedData.split("<color=").forEach( (value, index) => {

        if (index == 0) return

        ParsedData = ParsedData.replace(`<color=${value.split(">")[0]}>`, `<div style="color: ${value.split(">")[0]}">`)
        
    })
    ParsedData = ParsedData.replaceAll("</color>", "</div>")

    //Make the size change
    ParsedData.split("<size=").forEach( (value, index) => {

        if (index == 0) return

        ParsedData = ParsedData.replace(`<size=${value.split(">")[0]}>`, `<div style="font-size: ${value.split(">")[0]}">`)
        
    })
    ParsedData = ParsedData.replaceAll("</size>", "</div>")

     //Make the alignment change
    ParsedData.split("<align=").forEach( (value, index) => {

        if (index == 0) return

        ParsedData = ParsedData.replace(`<align=${value.split(">")[0]}>`, `<div style="text-align: ${value.split(">")[0].replaceAll('"', '')}">`)
        
    })
    ParsedData = ParsedData.replaceAll("</align>", "</div>")

    //Make the URL Showup
    ParsedData.split("<link=").forEach( (value, index) => {

        if (index == 0) return

        ParsedData = ParsedData.replace(`<link=${value.split(">")[0]}>`, `<a href=${value.split(">")[0]}">`)
        
    })
    ParsedData = ParsedData.replaceAll("</link>", "</a>")

    
    ParsedData = ParsedData.replaceAll("\n", "<br>")

	OldElements = document.createElement("div")
    OldElements.style.display = "inline"
	OldElements.innerHTML = ParsedData
    
    return OldElements

}
