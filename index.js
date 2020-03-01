import EditorJs from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";

const editor = new EditorJs({
  holderId: "codex-editor",

  tools: {
    header: {
      class: Header,
      inlineToolbar: ['link']
    },

    list: {
      class: List,
      inlineToolbar: ['link', 'bold']
    },
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        services: {
          youtube: true,
          coub: true
        }
      }
    }
  }
});

let saveBtn = document.querySelector("button");

saveBtn.addEventListener("click", function() {
  editor.save().then(outputData => {
      console.log("Saving Data", outputData);
    })
    .catch(error => {
      console.log("Saving Failed", error);
    });
});
