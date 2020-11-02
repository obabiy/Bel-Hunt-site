// import React from "react";

// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import $ from "jquery";

// function AdminPanelCreateArticleSpoiler({
//   titleRU,
//   titleEN,
//   titleDE,
//   titleFR,
//   titleESP,
//   titleITL,
//   titleDescriptionRU,
//   titleDescriptionEN,
//   titleDescriptionDE,
//   titleDescriptionFR,
//   titleDescriptionITL,
//   titleDescriptionESP,
//   textRU,
//   textEN,
//   textDE,
//   textFR,
//   textITL,
//   textESP,
//   img,
//   slug
// }) {
//   const open = (event) => {
//     $(event.currentTarget).siblings().slideToggle(1000);
//   };

//   const handleOnChangeEditor = (event, editor) => {
//     const data = editor.getData();
//     setArticleText(data);
//   };

//   return (
//     <div className="articleCreate__languageSpoiler">
//       <h2 className="articleCreate__language" onClick={open}>
//         {language}
//       </h2>
//       <h2>Заголовок ({language})</h2>
//       <input
//         className="article__title"
//         type="text"
//         value={articleTitle}
//         onChange={(e) => {
//           setArticleTitle(e.target.value);
//         }}
//       />
//       <h2>Краткое описание под заглавием: ({language})</h2>
//       <input
//         className="article__titleDescription"
//         type="text"
//         placeholder="необязательно"
//         value={articleTitleDescription}
//         onChange={(e) => {
//           setArticleTitleDescription(e.target.value);
//         }}
//       />
//       <h2>Текст: ({language})</h2>
//       <div className="editor__container">
//         <CKEditor
//           id="article__editor"
//           editor={ClassicEditor}
//           data={articleText}
//           onChange={handleOnChangeEditor}
//         />
//       </div>
//     </div>
//   );
// }

// export default AdminPanelCreateArticleSpoiler;
