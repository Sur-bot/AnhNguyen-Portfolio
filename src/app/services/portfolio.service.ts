import { Injectable } from '@angular/core';
import { PersonalInfo, Project, Skill, Experience } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getPersonalInfo(): PersonalInfo {
    return {
      name: 'Nguyễn Văn Anh',
      title: 'Frontend Developer',
      description: 'Xin chào! Mình là Anh, một sinh viên năm cuối đam mê phát triển web. Mình yêu thích việc tạo ra những giao diện web đẹp mắt, mượt mà và thân thiện với người dùng. Với kiến thức về Angular và các công nghệ web hiện đại, mình luôn tìm tòi và học hỏi để nâng cao kỹ năng mỗi ngày.',
      avatar: '',
      email: 'www.vanhsp2002@gmail.com',
      phone: '+84 856 676 665',
      location: 'TP. Hồ Chí Minh, Việt Nam',
      socials: [
        { name: 'GitHub', url: 'https://github.com/Sur-bot', icon: 'fab fa-github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/nguyenvanan', icon: 'fab fa-linkedin' },
        { name: 'Facebook', url: 'https://facebook.com/Survodich', icon: 'fab fa-facebook' }
      ]
    };
  }

  getSkills(): Skill[] {
    return [
      { name: 'HTML5', level: 90, icon: 'fab fa-html5', category: 'frontend' },
      { name: 'CSS3 / SCSS', level: 85, icon: 'fab fa-css3-alt', category: 'frontend' },
      { name: 'JavaScript', level: 80, icon: 'fab fa-js-square', category: 'frontend' },
      { name: 'TypeScript', level: 75, icon: 'fas fa-code', category: 'frontend' },
      { name: 'Angular', level: 75, icon: 'fab fa-angular', category: 'frontend' },
      { name: 'React', level: 65, icon: 'fab fa-react', category: 'frontend' },
      { name: 'Node.js', level: 60, icon: 'fab fa-node-js', category: 'backend' },
      { name: 'Express.js', level: 55, icon: 'fas fa-server', category: 'backend' },
      { name: 'MongoDB', level: 50, icon: 'fas fa-database', category: 'backend' },
      { name: 'MySQL', level: 55, icon: 'fas fa-database', category: 'backend' },
      { name: 'Git', level: 80, icon: 'fab fa-git-alt', category: 'tools' },
      { name: 'Figma', level: 70, icon: 'fab fa-figma', category: 'tools' },
      { name: 'VS Code', level: 90, icon: 'fas fa-laptop-code', category: 'tools' },
      { name: 'Docker', level: 40, icon: 'fab fa-docker', category: 'tools' },
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'E-Commerce Dashboard',
        description: 'Dashboard quản lý bán hàng với biểu đồ thống kê, quản lý đơn hàng và sản phẩm. Sử dụng Angular Material và Chart.js.',
        image: '',
        technologies: ['Angular', 'TypeScript', 'Angular Material', 'Chart.js'],
        category: 'web',
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 2,
        title: 'Weather App',
        description: 'Ứng dụng thời tiết với giao diện đẹp mắt, hiển thị dự báo 7 ngày, sử dụng OpenWeatherMap API.',
        image: '',
        technologies: ['React', 'CSS3', 'REST API', 'Responsive'],
        category: 'web',
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 3,
        title: 'Task Management App',
        description: 'Ứng dụng quản lý công việc theo phương pháp Kanban, hỗ trợ drag & drop, tags và filter.',
        image: '',
        technologies: ['Angular', 'Firebase', 'RxJS', 'SCSS'],
        category: 'web',
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 4,
        title: 'Portfolio Website',
        description: 'Trang portfolio cá nhân responsive với thiết kế hiện đại, dark theme và animations mượt mà.',
        image: '',
        technologies: ['Angular', 'TypeScript', 'CSS3', 'Animations'],
        category: 'web',
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 5,
        title: 'Chat Real-time',
        description: 'Ứng dụng chat real-time với Socket.io, hỗ trợ nhóm chat, gửi hình ảnh và emoji.',
        image: '',
        technologies: ['Node.js', 'Socket.io', 'MongoDB', 'Express'],
        category: 'fullstack',
        demoUrl: '#',
        githubUrl: '#'
      },
      {
        id: 6,
        title: 'Blog CMS',
        description: 'Hệ thống quản lý blog với editor WYSIWYG, quản lý bài viết, categories và tags.',
        image: '',
        technologies: ['React', 'Node.js', 'MySQL', 'REST API'],
        category: 'fullstack',
        demoUrl: '#',
        githubUrl: '#'
      }
    ];
  }

  getExperiences(): Experience[] {
    return [
      {
        id: 1,
        company: 'FPT Software',
        position: 'Frontend Developer Intern',
        duration: 'Tháng 6/2025 - Hiện tại',
        description: [
          'Phát triển giao diện web sử dụng Angular 16 và TypeScript',
          'Tham gia code review và áp dụng best practices',
          'Làm việc với RESTful APIs và RxJS',
          'Sử dụng Git cho version control trong team 8 người'
        ],
        icon: 'fas fa-building'
      },
      {
        id: 2,
        company: 'Freelance Projects',
        position: 'Web Developer',
        duration: 'Tháng 1/2025 - Tháng 5/2025',
        description: [
          'Thiết kế và phát triển 3 website cho khách hàng cá nhân',
          'Tối ưu hiệu suất và SEO cho các trang web',
          'Responsive design cho mọi thiết bị'
        ],
        icon: 'fas fa-laptop'
      },
      {
        id: 3,
        company: 'Đại học Bách Khoa TP.HCM',
        position: 'Sinh viên CNTT',
        duration: 'Tháng 9/2021 - Tháng 6/2025',
        description: [
          'Chuyên ngành Khoa học Máy tính',
          'GPA: 3.2/4.0',
          'Thành viên CLB Lập trình',
          'Đồ án tốt nghiệp: Hệ thống quản lý e-learning'
        ],
        icon: 'fas fa-graduation-cap'
      }
    ];
  }
}
