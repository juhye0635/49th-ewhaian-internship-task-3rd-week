const faqData = {
    recruitment: [
        { q: "Q. 운영진 모집에 있어 우대하는 학과가 있나요?", a: "아니요! 이화이언 운영진에는 다양한 전공의 벗들이 속해 있어, 이화이언을 사랑하는 마음과 열정으로 충분히 운영진 활동을 펼쳐나갈 수 있답니다!" },
        { q: "Q. 지원서를 잘 못 제출했는데, 수정이 가능한가요?", a: "네, 지원서 제출 기한 전까지는 지원하기 페이지에서 기존 지원자를 선택하시면 해당 페이지에서 수정이 가능합니다." },
        { q: "Q. 운영진 활동을 위한 필수 조건이 있나요?", a: "이화이언에 대한 애정과 열정이 제일 중요하겠지만, 학번에 상관 없이 최소 3학기 활동이 가능해야 합니다." },
        { q: "Q. 팀과 관련된 활동이나 경력이 없는데 지원이 가능한가요?", a: "네, 가능합니다! 수습 운영진으로 활동하는 기간 동안, 팀 수습 과제를 통해 팀 업무에 대한 이해도를 높일 수 있습니다." }
    ],
    activity: [
        { q: "Q. 운영진에게 주어지는 혜택이 있나요?", a: "매달 전체 운영진 회식비가 제공되고, 우수 운영진 대상 기프티콘, 인터넷 강의, 교육 도서, 유료 프로그램 지원 및 소정의 장학금이 지급됩니다." },
        { q: "Q. 시험 기간에도 운영진 활동이나 업무가 존재하나요?", a: "시험 기간에는 투표를 통해 휴회 날짜를 정한 후, 1-2주 정도 전체 회의를 쉬어갑니다." },
        { q: "Q. 팀 활동을 제외하고, 운영진으로서 어떤 활동을 하나요?", a: "건전한 사이트 운영을 위한 모니터링 업무와 이화이언 행사 운영 등의 활동을 하게 됩니다." }
    ],
    etc: [
        { q: "Q. 다른 팀과의 교류가 있나요?", a: "네, 있습니다! 전체 회의와 업무 교류는 물론, 회식과 MT 등의 활동을 통해 다른 팀 운영진들과 교류할 수 있습니다." },
        { q: "Q. 운영진 수료 후 관련하여 나아갈 수 있는 진로가 있나요?", a: "삼성전자, LG, 중앙일보, JTBC, 디즈니 등 다방면에서 선배님들이 활발하게 활동 중이신 최고의 포트폴리오입니다." }
    ]
};

const buttons = document.querySelectorAll('.tab-btn');
const faqList = document.getElementById('faq-list');

function renderFAQ(category) {
    faqList.innerHTML = ""; 
    
    faqData[category].forEach(item => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${item.q}</h3>
            <p>${item.a}</p>
        `;
        faqList.appendChild(article);
    });
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.style.backgroundColor = "#262626";
            btn.style.color = "#fff";
        });
        
        button.style.backgroundColor = "#ffffff";
        button.style.color = "#000";
        
        renderFAQ(button.dataset.category);
    });
});

// 초기 화면 설정
buttons[0].click();