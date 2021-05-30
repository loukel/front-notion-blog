function useReload(src) {
	var head = document.getElementsByTagName('head')[0]
	var script = document.createElement('script')
	script.src = src
	head.appendChild(script)
}

export default useReload

/* <script id="myscripttag" src="http://site2.com/myscript.js"></script> */
// document.getElementById("myscripttag").src