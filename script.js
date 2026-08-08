let currentClass = 'ssc';

// ==========================================
// ১. মেইন ডাটাবেজ
// ==========================================
const dataBase = {
  c79: {
    stories: [
      { id: "c79-s1", title: "A Liar Shepherd (Easy)", content: "Once a shepherd boy played a trick shouting 'Wolf! Wolf!' to make fun of villagers..." },
      { id: "c79-s2", title: "Dividing Bread (Easy)", content: "Two cats found a piece of bread and went to a monkey for dividing it..." },
      { id: "c79-s3", title: "The Honest Woodcutter (Easy)", content: "An honest woodcutter lost his axe in the river. A fairy came out to help him..." }
    ],
    dialogues: [
      { id: "c79-d1", title: "Tree Plantation (Easy)", content: "Rafi: Hi, Sohan. What are you doing?\n\nSohan: I am planting a tree in our school yard.\n\nRafi: Why are you planting trees?\n\nSohan: Trees give us oxygen and protect the environment." },
      { id: "c79-d2", title: "Importance of Reading Books (Easy)", content: "Rafi: Hello Sohan! What are you reading?\n\nSohan: I am reading a storybook. Reading books broadens our knowledge." }
    ],
    paragraphs: [
      { id: "c79-p1", title: "Mobile Phone (Easy)", content: "Mobile phone is a modern invention of science. It helps us communicate easily..." },
      { id: "c79-p2", title: "My School (Easy)", content: "My school is one of the best schools in our locality. It has a big playground..." }
    ],
    compositions: [
      { id: "c79-c1", title: "Wonders of Science (Easy)", content: "We live in an age of science. Science plays an important role in daily life..." },
      { id: "c79-c2", title: "My Hobby (Easy)", content: "Hobby makes our leisure time enjoyable. My favorite hobby is gardening..." }
    ]
  },
  ssc: {
    stories: [
      { id: "ssc-s1", title: "A Liar Shepherd", content: "A shepherd boy used to trick villagers by shouting Wolf! Wolf!..." },
      { id: "ssc-s2", title: "Dividing Bread", content: "Two cats found a piece of bread and went to a monkey..." },
      { id: "ssc-s3", title: "Unity is Strength", content: "An old man had three sons who used to quarrel constantly with each other..." },
      { id: "ssc-s4", title: "A Pencity Shepherd", content: "A shepherd boy story..." },
      { id: "ssc-s5", title: "Story Writing Techniques", content: "General story writing techniques..." }
    ],
    dialogues: [
      { id: "ssc-d1", title: "Importance of Learning English", content: "Rafi: Hi Sohan, why are you studying English so hard?\n\nSohan: Because English is an international language. It is necessary for higher education and job opportunities.\n\nRafi: Is it very important for our future?\n\nSohan: Thanks, I will practice English daily now!" },
      { id: "ssc-d2", title: "Tree Plantation", content: "Rafi: Hi Sohan! What are you doing?\n\nSohan: I am planting saplings in our garden.\n\nRafi: Why is tree plantation so vital?\n\nSohan: Trees produce oxygen, bring rain, and prevent soil erosion." },
      { id: "ssc-d3", title: "Preparation for Exam", content: "Discussion about upcoming examination preparation..." },
      { id: "ssc-d4", title: "Preparation Phone", content: "Dialogue regarding phone usage..." },
      { id: "ssc-d5", title: "Aim in Life / Future Plan", content: "Dialogue on exam strategies and aim in life..." }
    ],
    paragraphs: [
      { id: "ssc-p1", title: "Mobile Phone", content: "Mobile phone is a modern invention of science..." },
      { id: "ssc-p2", title: "Price Hike", content: "Price hike causes suffering to general people..." },
      { id: "ssc-p3", title: "Our School Library", content: "A school library is a storehouse of knowledge..." },
      { id: "ssc-p4", title: "Comfort Phone", content: "Paragraph about comfort of mobile communication..." }
    ],
    compositions: [
      { id: "ssc-c1", title: "Wonders of Science", content: "Science plays an important role in daily life..." },
      { id: "ssc-c2", title: "Aim in Life", content: "Every person should have a clear aim in life..." },
      { id: "ssc-c3", title: "Student Life", content: "Detailed essay on student life and duties..." }
    ]
  },
  hsc: {
    stories: [
      { id: "hsc-s1", title: "King Midas", content: "King Midas was very greedy for gold..." }
    ],
    dialogues: [
      { id: "hsc-d1", title: "Climate Change", content: "Global climate change is a severe threat..." }
    ],
    paragraphs: [
      { id: "hsc-p1", title: "Deforestation", content: "Trees are being cut down indiscriminately..." }
    ],
    compositions: [
      { id: "hsc-c1", title: "Digital Bangladesh", content: "Digital Bangladesh envisions a tech-driven nation..." },
      { id: "hsc-c2", title: "Aim in Life (HSC)", content: "HSC level essay on aim in life..." }
    ]
  }
};

// ==========================================
// ২. ক্লাস সিলেক্টর ও কার্ড লোডার
// ==========================================
function selectClass(cls) {
  currentClass = cls;

  const slider = document.querySelector('.pill-slider');
  if (slider) {
    if (cls === 'c79') slider.style.transform = 'translateX(0%)';
    else if (cls === 'ssc') slider.style.transform = 'translateX(100%)';
    else if (cls === 'hsc') slider.style.transform = 'translateX(200%)';
  }

  document.querySelectorAll('.toggle-pill').forEach(el => el.classList.remove('active'));
  const activePill = document.getElementById(`pill-${cls}`);
  if (activePill) activePill.classList.add('active');

  loadHomeContent();

  const searchInp = document.getElementById('searchInput');
  const searchDrop = document.getElementById('searchDropdown');
  if (searchInp) searchInp.value = '';
  if (searchDrop) searchDrop.style.display = 'none';
}

function loadHomeContent() {
  const data = dataBase[currentClass] || dataBase['ssc'];
  renderCategory('story-list', data.stories, 'story');
  renderCategory('dialogue-list', data.dialogues, 'dialogue');
  renderCategory('paragraph-list', data.paragraphs, 'paragraph');
  renderCategory('composition-list', data.compositions, 'composition');
}

function renderCategory(elementId, items, type) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.innerHTML = '';
  if (items && items.length > 0) {
    items.forEach((item, idx) => {
      const li = document.createElement('li');
      const numStr = (idx + 1).toString().padStart(2, '0');
      li.innerHTML = `<a href="content.html?type=${type}&highlight=${item.id}">${numStr}. ${item.title}</a>`;
      el.appendChild(li);
    });
  } else {
    el.innerHTML = '<li><small style="color:#777;">No items in this class</small></li>';
  }
}

// ==========================================
// ৩. সার্চ ফিল্টার ও নেভিগেশন
// ==========================================
function checkSearch() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");
  const dropdown = document.getElementById("searchDropdown");

  if (input && input.value.trim() !== "") {
    if (clearBtn) clearBtn.style.display = "block";
  } else {
    if (clearBtn) clearBtn.style.display = "none";
    if (dropdown) dropdown.style.display = "none";
  }
}

function getAllFlatData() {
  let all = [];
  Object.keys(dataBase).forEach(cls => {
    ['stories', 'dialogues', 'paragraphs', 'compositions'].forEach(typeKey => {
      let singularType = typeKey.replace(/s$/, '');
      if (typeKey === 'stories') singularType = 'story';
      
      dataBase[cls][typeKey].forEach(item => {
        all.push({
          ...item,
          type: singularType,
          class: cls
        });
      });
    });
  });
  return all;
}

function searchTopics() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const dropdown = document.getElementById("searchDropdown");
  const resultsList = document.getElementById("searchResultsList");

  if (!dropdown || !resultsList) return;

  if (input === "") {
    dropdown.style.display = "none";
    return;
  }

  const allItems = getAllFlatData();

  const matched = allItems.filter(item => {
    const titleLower = item.title.toLowerCase();
    if (titleLower.startsWith(input)) return true;

    const queryWords = input.split(/\s+/).filter(Boolean);
    const titleWords = titleLower.split(/\s+/).filter(Boolean);

    return queryWords.every(qWord => 
      titleWords.some(tWord => tWord.startsWith(qWord))
    );
  });

  resultsList.innerHTML = "";

  const classNames = {
    c79: 'CLASS 7-9',
    ssc: 'SSC',
    hsc: 'HSC'
  };

  if (matched.length > 0) {
    dropdown.style.display = "block";

    matched.forEach(item => {
      const li = document.createElement("li");
      li.style.padding = "10px 14px";
      li.style.cursor = "pointer";
      li.style.borderBottom = "1px solid #eee";
      li.style.display = "flex";
      li.style.flexDirection = "column";
      li.style.alignItems = "flex-start";
      li.style.gap = "6px";

      const className = classNames[item.class] || item.class.toUpperCase();

      li.innerHTML = `
        <div style="color:#111; font-weight:600; font-size:14px; line-height:1.3; width:100%;">
          ${item.title}
        </div>
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="background:#ff9800; color:#fff; font-size:9px; padding:2px 6px; border-radius:3px; font-weight:700; text-transform:uppercase;">${className}</span>
          <span style="background:#0b4f50; color:#fff; font-size:9px; padding:2px 6px; border-radius:3px; font-weight:700; text-transform:uppercase;">${item.type}</span>
        </div>
      `;
      
      li.onclick = () => {
        dropdown.style.display = "none";
        window.location.href = `content.html?type=${item.type}&highlight=${item.id}`;
      };

      resultsList.appendChild(li);
    });
  } else {
    dropdown.style.display = "block";
    resultsList.innerHTML = `<li style="padding:12px; color:#888; text-align:center; font-size:13px;">No results found</li>`;
  }
}

function clearSearch() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");
  const dropdown = document.getElementById("searchDropdown");
  if (input) input.value = "";
  if (clearBtn) clearBtn.style.display = "none";
  if (dropdown) dropdown.style.display = "none";
}

document.addEventListener("click", function (event) {
  const searchBox = document.querySelector(".search-box");
  const dropdown = document.getElementById("searchDropdown");
  if (searchBox && !searchBox.contains(event.target)) {
    if (dropdown) dropdown.style.display = "none";
  }
});

// ==========================================
// ৪. content.html পেজ লোড ও শুধুমাত্র হাইলাইট (পপআপ বন্ধ)
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  loadHomeContent();

  const container = document.getElementById("topicsContainer");
  if (!container) return; 

  const urlParams = new URLSearchParams(window.location.search);
  const selectedType = urlParams.get("type");
  const highlightId = urlParams.get("highlight");

  const allItems = getAllFlatData();
  let filtered = allItems;

  if (selectedType) {
    filtered = allItems.filter(item => item.type === selectedType);
    const titleElem = document.getElementById("categoryTitle");
    if (titleElem) titleElem.innerText = selectedType.toUpperCase() + " COLLECTION";
  }

  container.innerHTML = "";
  
  if (filtered.length === 0) {
    container.innerHTML = "<p style='text-align:center; padding: 20px;'>No content found in this category.</p>";
    return;
  }

  filtered.forEach((item, index) => {
    const num = (index + 1).toString().padStart(2, '0');
    const topicBox = document.createElement("div");
    topicBox.className = "topic-box-item";
    topicBox.id = `topic-item-${item.id}`;
    topicBox.style.transition = "all 0.4s ease";
    topicBox.innerHTML = `
      <span class="topic-num">${num}.</span>
      <span class="topic-title-text">${item.title}</span>
    `;

    topicBox.onclick = function() {
      handleTopicClick(this, item.title, item.content);
    };

    container.appendChild(topicBox);
  });

  // পপআপ অটো-ওপেন হওয়া বন্ধ করা হয়েছে, শুধুমাত্র হাইলাইট করা হবে
  if (highlightId) {
    setTimeout(() => {
      const targetElement = document.getElementById(`topic-item-${highlightId}`);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetElement.classList.add("highlighted-topic");
        
        // হাইলাইট স্টাইল
        targetElement.style.backgroundColor = "#fff3cd";
        targetElement.style.border = "2px solid #ff9800";
        targetElement.style.boxShadow = "0 0 10px rgba(255, 152, 0, 0.4)";
      }
    }, 300);
  }
});

function handleTopicClick(element, title, content) {
  if (element) {
    element.classList.remove("highlighted-topic");
    element.style.backgroundColor = "";
    element.style.border = "";
    element.style.boxShadow = "";
  }
  openPopup(title, content);
}

function openPopup(title, content) {
  const modal = document.getElementById("contentModal") || document.getElementById("modal");
  const titleElem = document.getElementById("modalTitle") || document.getElementById("modal-title");
  const bodyElem = document.getElementById("modalBody") || document.getElementById("modal-body");
  
  if (modal && titleElem && bodyElem) {
    titleElem.innerText = title;
    bodyElem.innerText = content;
    modal.style.display = "flex";
  }
}

function closePopup() {
  const modal = document.getElementById("contentModal") || document.getElementById("modal");
  if (modal) {
    modal.style.display = "none";
  }
}

function downloadPDF() {
  const titleElem = document.getElementById('modalTitle') || document.getElementById('modal-title');
  const bodyElem = document.getElementById('modalBody') || document.getElementById('modal-body');

  if (!titleElem || !bodyElem) return;

  const title = titleElem.innerText;
  const content = bodyElem.innerText;

  if (window.jspdf) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text(title, 10, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    
    const splitText = doc.splitTextToSize(content, 180);
    doc.text(splitText, 10, 32);

    doc.save(title.replace(/[^a-zA-Z0-9]/g, "_") + ".pdf");
  } else {
    alert("PDF generator library not loaded.");
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  const templateParams = {
    user_name: document.getElementById('reqName').value,
    user_email: document.getElementById('reqEmail').value,
    user_phone: document.getElementById('reqPhone').value,
    message: document.getElementById('reqMessage').value
  };

  emailjs.send("service_7kbww4l", "template_lk6cm6k", templateParams)
    .then(function(response) {
       alert("তোমার রিকোয়েস্টটি সফলভাবে পাঠানো হয়েছে!");
       document.getElementById('topicForm').reset();
    }, function(error) {
       alert("দুঃখিত, ইমেইলটি পাঠানো যায়নি। আবার চেষ্টা কর।");
       console.log("Error:", error);
    });
}

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    header.classList.add('header-hidden');
  } else {
    header.classList.remove('header-hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// পোস্ট পাবলিশ করার ফাংশন (ড্যাশবোর্ড বা ফর্মের জন্য)
function publishPost() {
    const content = document.getElementById('postEditor') ? document.getElementById('postEditor').value : '';
    const category = document.getElementById('category') ? document.getElementById('category').value : 'Dialogue';
    const targetClass = document.getElementById('className') ? document.getElementById('className').value : 'SSC';

    if (!content) {
        alert("আগে কিছু লিখুন মামা!");
        return;
    }

    // ফায়ারবেসে পোস্ট পাঠানো
    firebase.database().ref('posts').push({
        text: content,
        category: category,
        targetClass: targetClass,
        time: Date.now()
    }).then(() => {
        alert("সফলভাবে পোস্ট পাবলিশ হয়েছে!");
        if (document.getElementById('postEditor')) {
            document.getElementById('postEditor').value = "";
        }
    }).catch((error) => {
        alert("এরর হয়েছে: " + error.message);
    });
}