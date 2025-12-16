// AICANARY: CSD-ELearn-2025

function renderCourseCard(course) {
    const levelClass = `level-${course.level}`;
    return `
        <div class="course-card glass" onclick="location.href='course-details.html?id=${course.id}'">
            <div class="course-thumbnail">💻</div>
            <h3>${course.title}</h3>
            <p>${course.description.substring(0, 100)}...</p>
            <div class="course-meta">
                <span class="level-badge ${levelClass}">${course.level}</span>
                <span>${course.duration}</span>
            </div>
        </div>
    `;
}

function renderBookCard(book) {
    return `
        <div class="book-card glass">
            <div class="book-thumbnail">📚</div>
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p>${book.description.substring(0, 120)}...</p>
            <div class="book-meta">
                <span>${book.pages} pages</span>
                <span>${book.year}</span>
            </div>
        </div>
    `;
}

function loadFeaturedCourses() {
    const container = document.getElementById('featuredCourses');
    if (!container || typeof coursesData === 'undefined') return;
    
    const featured = coursesData.filter(course => course.featured).slice(0, 3);
    container.innerHTML = featured.map(renderCourseCard).join('');
}

function loadAllCourses() {
    const container = document.getElementById('coursesList');
    if (!container || typeof coursesData === 'undefined') return;
    
    container.innerHTML = coursesData.map(renderCourseCard).join('');
}

function loadAllBooks() {
    const container = document.getElementById('booksList');
    if (!container || typeof booksData === 'undefined') return;
    
    container.innerHTML = booksData.map(renderBookCard).join('');
}

function filterCourses() {
    if (typeof coursesData === 'undefined') return;
    
    const categoryFilter = document.getElementById('categoryFilter');
    const levelFilter = document.getElementById('levelFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (!categoryFilter || !levelFilter || !searchInput) return;
    
    const category = categoryFilter.value;
    const level = levelFilter.value;
    const search = searchInput.value.toLowerCase();
    
    let filtered = coursesData;
    
    if (category !== 'all') {
        filtered = filtered.filter(course => course.category === category);
    }
    
    if (level !== 'all') {
        filtered = filtered.filter(course => course.level === level);
    }
    
    if (search) {
        filtered = filtered.filter(course => 
            course.title.toLowerCase().includes(search) ||
            course.description.toLowerCase().includes(search)
        );
    }
    
    const container = document.getElementById('coursesList');
    const noResults = document.getElementById('noResults');
    
    if (filtered.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
    } else {
        container.innerHTML = filtered.map(renderCourseCard).join('');
        noResults.style.display = 'none';
    }
}

function filterBooks() {
    if (typeof booksData === 'undefined') return;
    
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (!categoryFilter || !searchInput) return;
    
    const category = categoryFilter.value;
    const search = searchInput.value.toLowerCase();
    
    let filtered = booksData;
    
    if (category !== 'all') {
        filtered = filtered.filter(book => book.category === category);
    }
    
    if (search) {
        filtered = filtered.filter(book => 
            book.title.toLowerCase().includes(search) ||
            book.author.toLowerCase().includes(search) ||
            book.description.toLowerCase().includes(search)
        );
    }
    
    const container = document.getElementById('booksList');
    const noResults = document.getElementById('noResults');
    
    if (filtered.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
    } else {
        container.innerHTML = filtered.map(renderBookCard).join('');
        noResults.style.display = 'none';
    }
}

function loadCourseDetails() {
    if (typeof coursesData === 'undefined') return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = parseInt(urlParams.get('id'));
    
    const course = coursesData.find(c => c.id === courseId);
    
    if (!course) {
        document.getElementById('courseContent').innerHTML = '<p>Course not found.</p>';
        return;
    }
    
    document.getElementById('courseTitle').textContent = course.title;
    document.getElementById('courseMeta').textContent = `${course.category} • ${course.level}`;
    document.getElementById('courseDescription').textContent = course.description;
    document.getElementById('courseDuration').textContent = course.duration;
    document.getElementById('courseLevel').textContent = course.level;
    document.getElementById('courseCategory').textContent = course.category;
    document.getElementById('courseInstructor').textContent = course.instructor;
    
    const objectivesList = document.getElementById('courseObjectives');
    objectivesList.innerHTML = course.objectives.map(obj => `<li>${obj}</li>`).join('');
    
    const requirementsList = document.getElementById('courseRequirements');
    requirementsList.innerHTML = course.requirements.map(req => `<li>${req}</li>`).join('');
    
    const curriculumDiv = document.getElementById('courseCurriculum');
    curriculumDiv.innerHTML = `
        <p>Week 1-2: Introduction and fundamentals</p>
        <p>Week 3-4: Core concepts and practical applications</p>
        <p>Week 5-6: Advanced topics and real-world projects</p>
        <p>Week 7-8: Final project and assessment</p>
    `;
    
    const enrollBtn = document.querySelector('.enroll-btn');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', function() {
            showEnrollModal(course.title);
        });
    }
}

function initCoursesPage() {
    loadAllCourses();
    
    const categoryFilter = document.getElementById('categoryFilter');
    const levelFilter = document.getElementById('levelFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterCourses);
    }
    
    if (levelFilter) {
        levelFilter.addEventListener('change', filterCourses);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', filterCourses);
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam && categoryFilter) {
        categoryFilter.value = categoryParam;
        filterCourses();
    }
}

function initBooksPage() {
    loadAllBooks();
    
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterBooks);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', filterBooks);
    }
}

function init() {
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path.endsWith('/')) {
        loadFeaturedCourses();
    } else if (path.includes('courses.html')) {
        initCoursesPage();
    } else if (path.includes('course-details.html')) {
        loadCourseDetails();
    } else if (path.includes('books.html')) {
        initBooksPage();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
