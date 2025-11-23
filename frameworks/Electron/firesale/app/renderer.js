// ========================================================
// in renderer process
// ========================================================

// ========================================================
// app configurations
// ========================================================
// console.log(window.gv)
let appConfig = {}

// ========================================================
// track files
// ========================================================
let filePath = null
let originalContent = ''

// ========================================================
// renderer logics goes here
// ========================================================
const markdownView = document.querySelector('#markdown');
const htmlView = document.querySelector('#html');
const newFileButton = document.querySelector('#new-file');
const openFileButton = document.querySelector('#open-file');
const saveMarkdownButton = document.querySelector('#save-markdown');
const revertButton = document.querySelector('#revert');
const saveHtmlButton = document.querySelector('#save-html');
const showFileButton = document.querySelector('#show-file');
const openInDefaultButton = document.querySelector('#open-in-default');

const rendererMarkdown = (markdown) => {
  markdownView.innerHTML = markdown
}

const renderMarkdownToHtml = (markdown) => {
  htmlView.innerHTML = marked.parse(markdown, { sanitize: true });
};

// edit markdown
markdownView.addEventListener('keyup', (event) => {
  const currentContent = event.target.value;
  renderMarkdownToHtml(currentContent);

  updateUI(currentContent !== originalContent)
});

// open file
openFileButton.addEventListener('click', async () => {
  // alert('You clicked the "Open File" button.');
  let { file, content } = await gv.openFile()
  filePath = file
  originalContent = content
  if (content) {
    rendererMarkdown(content)
    renderMarkdownToHtml(content)
  }
  await gv.watchFile(file) // add fs watcher
  await updateUI()
});

const updateUI = async (isEdited) => {
  let title = 'Fire Sale';
  if (filePath) { title = `${filePath} - ${title}`; }
  if (isEdited) { title = `${title} (Edited)`; }

  // set window title
  document.getElementsByTagName('title')[0].innerText = title

  saveMarkdownButton.disabled = !isEdited;
  revertButton.disabled = !isEdited;
}

// new file
newFileButton.addEventListener('click', async () => {
  await gv.createWindow()
});

// save file
saveMarkdownButton.addEventListener('click', async () => {
  await gv.saveFile(markdownView.value)

  await updateUI()
})

// save html
saveHtmlButton.addEventListener('click', async () => {
  await gv.saveHtml(htmlView.innerHTML)
});

// revert
revertButton.addEventListener('click', () => {
  markdownView.value = originalContent;
  renderMarkdownToHtml(originalContent);
});

// drag-and-drop
document.addEventListener('dragstart', event => event.preventDefault());
document.addEventListener('dragover', event => event.preventDefault());
document.addEventListener('dragleave', event => event.preventDefault());
document.addEventListener('drop', event => event.preventDefault());

const getDraggedFile = (event) => event.dataTransfer.items[0];
const getDroppedFile = (event) => event.dataTransfer.files[0];
const fileTypeIsSupported = (file) => {
  return ['text/plain', 'text/markdown', ''].includes(file.type); // FIXME: markdown file drop
};

markdownView.addEventListener('dragover', (event) => {
  const file = getDraggedFile(event);
  if (fileTypeIsSupported(file)) {
    markdownView.classList.add('drag-over');
  } else {
    markdownView.classList.add('drag-error');
  }
});
markdownView.addEventListener('dragleave', () => {
  markdownView.classList.remove('drag-over');
  markdownView.classList.remove('drag-error');
});
markdownView.addEventListener('drop', async (event) => {
  const file = getDroppedFile(event);
  debugger
  if (fileTypeIsSupported(file)) {
    const content = await gv.readFile(file.path)
    rendererMarkdown(content)
    renderMarkdownToHtml(content)

    updateUI(content !== originalContent)
  } else {
    alert('That file type is not supported: '+ file.type);
  }
  markdownView.classList.remove('drag-over');
  markdownView.classList.remove('drag-error');
});

// ========================================================
// setup logic goes here
// ========================================================
(async () => {
  appConfig = await gv.config();
  if (appConfig.debug) {
    console.log("AppConfig", appConfig)
  }

  document.querySelector("#footer").innerHTML = `Powered by Chrome (v${gv.chrome()}), 
  Node.js (v${gv.node()}), and 
  Electron (v${window.gv.electron()})`

  // IPC from main process
  gv.onFileChanged((file, content) => {
    if (appConfig.debug) {
      console.log("File changed", file, content)
    }
    if (filePath === file) {
      rendererMarkdown(content)
      renderMarkdownToHtml(content)
      updateUI()
    }
  })
})()
