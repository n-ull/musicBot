function Btn(props) {
  return /*#__PURE__*/(
    React.createElement("button", { className: "btn" }, /*#__PURE__*/
    React.createElement("i", { className: props.icon })));


}
// <Btn icon="fa-solid fa-magnifying-glass"/>
function TopMenu() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "app-menu" }, /*#__PURE__*/
    React.createElement("div", { class: "search" }, /*#__PURE__*/
    React.createElement("input", { type: "text", className: "textinput" }), /*#__PURE__*/
    React.createElement(Btn, { icon: "fa-solid fa-bolt" })), /*#__PURE__*/

    React.createElement(Btn, { icon: "fa-solid fa-right-from-bracket" })));


}
function MediaView(props) {
  const DEFAULT_IMAGE = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Ccircle style='fill:%23E57788;' cx='256' cy='256' r='248.163'/%3E%3Cpath style='fill:%23ED9BA3;' d='M504.163,256H7.837C7.837,118.941,118.941,7.837,256,7.837S504.163,118.941,504.163,256z'/%3E%3Ccircle style='fill:%23FFFFFF;' cx='256' cy='256' r='83.592'/%3E%3Ccircle style='fill:%23DDB92E;' cx='256' cy='256' r='57.469'/%3E%3Cpath style='fill:%23FFE789;' d='M313.469,256H198.531c0-31.744,25.725-57.469,57.469-57.469S313.469,224.256,313.469,256z'/%3E%3Cpath d='M256,512c-68.38,0-132.668-26.628-181.019-74.981S0,324.38,0,256S26.628,123.332,74.981,74.981S187.62,0,256,0 s132.668,26.628,181.019,74.981S512,187.62,512,256s-26.628,132.668-74.981,181.019S324.38,512,256,512z M256,15.673 c-64.194,0-124.545,24.998-169.937,70.39C40.672,131.455,15.673,191.807,15.673,256s24.998,124.545,70.39,169.937 c45.392,45.391,105.743,70.39,169.937,70.39s124.545-24.998,169.937-70.39c45.391-45.392,70.39-105.744,70.39-169.937 s-24.998-124.545-70.39-169.937C380.544,40.672,320.193,15.673,256,15.673z'/%3E%3Cpath style='fill:%23FFFFFF;' d='M56.066,257.811H40.393c0-118.473,96.385-214.857,214.857-214.857v15.673 C145.419,58.627,56.066,147.982,56.066,257.811z'/%3E%3Cpath d='M255.25,472.668v-15.673c109.83,0,199.184-89.353,199.184-199.184c0-2.347-0.042-4.735-0.124-7.1l15.663-0.549 c0.09,2.546,0.135,5.12,0.135,7.649C470.107,376.283,373.722,472.668,255.25,472.668z'/%3E%3Cpath style='fill:%23FFFFFF;' d='M97.209,257.811H81.535c0-95.786,77.927-173.714,173.714-173.714V99.77 C168.106,99.77,97.209,170.667,97.209,257.811z'/%3E%3Cpath d='M255.25,431.525v-15.673c87.143,0,158.041-70.897,158.041-158.041h15.673C428.964,353.598,351.037,431.525,255.25,431.525z'/%3E%3Cpath style='fill:%23FFFFFF;' d='M138.352,257.811h-15.673c0-73.1,59.471-132.571,132.571-132.571v15.673 C190.792,140.913,138.352,193.353,138.352,257.811z'/%3E%3Cpath d='M255.25,390.382v-15.673c64.459,0,116.898-52.44,116.898-116.898h15.673C387.821,330.911,328.35,390.382,255.25,390.382z'/%3E%3Cpath d='M256,347.429c-50.414,0-91.429-41.014-91.429-91.429s41.014-91.429,91.429-91.429s91.429,41.014,91.429,91.429 S306.414,347.429,256,347.429z M256,180.245c-41.772,0-75.755,33.983-75.755,75.755s33.983,75.755,75.755,75.755 s75.755-33.983,75.755-75.755S297.772,180.245,256,180.245z'/%3E%3Ccircle style='fill:%23FFFFFF;' cx='256' cy='256' r='26.122'/%3E%3Cpath d='M256,289.959c-18.726,0-33.959-15.235-33.959-33.959s15.234-33.959,33.959-33.959s33.959,15.235,33.959,33.959 S274.726,289.959,256,289.959z M256,237.714c-10.082,0-18.286,8.203-18.286,18.286c0,10.082,8.203,18.286,18.286,18.286 c10.082,0,18.286-8.203,18.286-18.286C274.286,245.918,266.082,237.714,256,237.714z'/%3E%3Cpath d='M256,321.306c-36.01,0-65.306-29.297-65.306-65.306S219.99,190.694,256,190.694s65.306,29.297,65.306,65.306 S292.01,321.306,256,321.306z M256,206.367c-27.367,0-49.633,22.266-49.633,49.633s22.266,49.633,49.633,49.633 s49.633-22.266,49.633-49.633S283.367,206.367,256,206.367z'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E`;
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("figure", null, /*#__PURE__*/
    React.createElement("img", { className: "disc", src: props.img || DEFAULT_IMAGE, alt: "" })), /*#__PURE__*/

    React.createElement("div", { className: "controls" }, /*#__PURE__*/
    React.createElement(Btn, { icon: "fa-solid fa-shuffle" }), /*#__PURE__*/
    React.createElement(Btn, { icon: "fa-solid fa-backward-step" }), /*#__PURE__*/
    React.createElement(Btn, { icon: "fa-solid fa-play" }), /*#__PURE__*/
    React.createElement(Btn, { icon: "fa-solid fa-forward-step" }), /*#__PURE__*/
    React.createElement(Btn, { icon: "fa-solid fa-volume-high" })), /*#__PURE__*/

    React.createElement("span", {
      style: {
        padding: "0 .5em",
        "-webkit-user-select": "text",
        "-moz-user-select": "text",
        "-ms-user-select": "text",
        "user-select": "text",
        cursor: "auto" } }, /*#__PURE__*/


    React.createElement("h3", null, props.title), /*#__PURE__*/
    React.createElement("h4", null, props.disc))));



}

function PlaylistItem(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "list-item-wraper" }, /*#__PURE__*/
    React.createElement("div", { class: "list-item" }, /*#__PURE__*/
    React.createElement("span", null, props.id, "."), /*#__PURE__*/
    React.createElement("span", null, "Song name"), /*#__PURE__*/
    React.createElement("span", null, "..."))));



}
function Playlist() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "playlist" },
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((e, i) => /*#__PURE__*/
    React.createElement(PlaylistItem, { key: i, id: i + 1 }))));



}
function Footer() {
  return /*#__PURE__*/React.createElement("div", null);
}
function App() {
  const [playlist, setPlaylist] = React.useState([]);
  const [title, setTitle] = React.useState("No song");
  const [disc, setDisc] = React.useState("No disk");
  const [img, setImg] = React.useState("");
  return /*#__PURE__*/(
    React.createElement("div", { className: "app" }, /*#__PURE__*/
    React.createElement(TopMenu, null), /*#__PURE__*/
    React.createElement("main", null, /*#__PURE__*/
    React.createElement("section", { className: "app-main" }, /*#__PURE__*/
    React.createElement(MediaView, { title: title, disc: disc, img: img }), /*#__PURE__*/
    React.createElement(Playlist, null))), /*#__PURE__*/


    React.createElement("footer", { className: "app-footer" })));


}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("wrapper"));