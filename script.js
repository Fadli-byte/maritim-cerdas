 // Toggle Mobile Menu
        function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        // Ripple Effect on Click
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function(e) {
                // Add clicked animation
                this.classList.add('clicked');
                setTimeout(() => {
                    this.classList.remove('clicked');
                }, 600);

                // Create ripple effect
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);

                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    setTimeout(() => {
                        document.getElementById('navMenu').classList.remove('active');
                    }, 300);
                }
            });
        });

        // Button Click Effect
        document.querySelector('.btn-layanan').addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });

        // Smooth Scroll
        document.querySelectorAll('.nav-menu a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(targetId);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Navbar Scroll Effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                navbar.style.padding = '10px 40px';
            } else {
                navbar.style.padding = '15px 40px';
            }
            
            lastScroll = currentScroll;
        });

        // Error handling untuk logo image
        document.getElementById('logoImg').addEventListener('error', function() {
            // Jika gambar gagal load, tampilkan emoji sebagai fallback
            this.style.display = 'none';
            this.parentElement.innerHTML = '<span style="font-size: 32px;">🌊</span>';
        });


         (function() {
        // Function to animate counter
        function animateStatsCounter(element, target, suffix, duration) {
            duration = duration || 2000;
            let current = 0;
            const increment = target / (duration / 16);
            const numberElement = element.querySelector('.stat-num');
            
            const timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                const displayValue = Math.floor(current);
                numberElement.textContent = displayValue + suffix;
            }, 16);
        }

        // Intersection Observer for scroll animation
        const statsObserverOptions = {
            threshold: 0.3,
            rootMargin: '0px'
        };

        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const statsContainer = entry.target.querySelector('.stats-container');
                    if (statsContainer) {
                        statsContainer.classList.add('stats-visible');
                        
                        const statBoxes = statsContainer.querySelectorAll('.stat-box');
                        statBoxes.forEach(function(item, index) {
                            setTimeout(function() {
                                const target = parseInt(item.dataset.target);
                                const suffix = item.dataset.suffix || '';
                                animateStatsCounter(item, target, suffix);
                            }, index * 200);
                        });
                        
                        statsObserver.unobserve(entry.target);
                    }
                }
            });
        }, statsObserverOptions);

        // Start observing
        const statsSection = document.getElementById('statsSection');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // Add click animation
        document.querySelectorAll('.stat-box').forEach(function(item) {
            item.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(function() {
                    item.style.transform = '';
                }, 200);
            });
        });
    })();



     // Create rain effect
        function createRain() {
            const rain = document.getElementById('rain');
            for (let i = 0; i < 50; i++) {
                const drop = document.createElement('div');
                drop.className = 'raindrop';
                drop.style.left = Math.random() * 100 + '%';
                drop.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
                drop.style.animationDelay = Math.random() * 2 + 's';
                rain.appendChild(drop);
            }
        }
        createRain();

        // Cera bubble management
        let ceraBubbleVisible = false;
        
        setTimeout(() => {
            document.getElementById('ceraBubble').classList.add('active');
            ceraBubbleVisible = true;
        }, 3000);

        function toggleCeraBubble() {
            const bubble = document.getElementById('ceraBubble');
            ceraBubbleVisible = !ceraBubbleVisible;
            if (ceraBubbleVisible) {
                bubble.classList.add('active');
            } else {
                bubble.classList.remove('active');
            }
        }

        function closeCeraBubble() {
            document.getElementById('ceraBubble').classList.remove('active');
            ceraBubbleVisible = false;
        }

        function activateCera() {
            toggleCeraBubble();
            scrollToTop();
        }

        function startCeraTour() {
            closeCeraBubble();
            const messages = [
                { text: "🎉 Selamat datang! Mari saya tunjukkan fitur-fitur portal ini!", delay: 0 },
                { text: "📚 Di bagian atas, Anda bisa memilih topik: Meteorologi, Klimatologi, atau Geofisika", delay: 2500 },
                { text: "🎬 Klik kartu topik untuk melihat video edukasi interaktif!", delay: 5000 },
                { text: "📖 Scroll ke bawah untuk melihat semua konten video yang tersedia", delay: 7500 },
                { text: "💡 Klik video untuk menonton dan belajar lebih dalam!", delay: 10000 },
                { text: "✨ Selamat belajar! Jika butuh bantuan, klik ikon saya kapan saja", delay: 12500 }
            ];
            
            messages.forEach(msg => {
                setTimeout(() => showNotification(msg.text), msg.delay);
            });
        }

        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification-toast';
            notification.innerHTML = `<p>${message}</p>`;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.5s ease-out';
                setTimeout(() => notification.remove(), 500);
            }, 2000);
        }

        // Scroll functions
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Modal management
        const topics = {
            meteorologi: {
                title: '☁️ Meteorologi',
                description: 'Meteorologi adalah ilmu yang mempelajari atmosfer dan fenomena cuaca. Pelajari bagaimana meteorolog memprediksi cuaca, memahami pola angin, tekanan udara, dan berbagai fenomena atmosfer lainnya yang penting untuk keselamatan maritim.'
            },
            klimatologi: {
                title: '🌊 Klimatologi',
                description: 'Klimatologi mempelajari iklim dan pola cuaca jangka panjang. Jelajahi bagaimana iklim mempengaruhi ekosistem laut, pola curah hujan, perubahan iklim global, dan dampaknya terhadap kehidupan maritim.'
            },
            geofisika: {
                title: '🌍 Geofisika',
                description: 'Geofisika adalah ilmu yang mempelajari struktur dan dinamika bumi. Pahami bagaimana gempa bumi terjadi, tsunami terbentuk, aktivitas vulkanik, dan bagaimana BMKG memantau fenomena geofisika untuk mitigasi bencana.'
            }
        };

        const videos = {
            gelombang: {
                title: ' Gelombang Laut',
                description: 'Video ini menjelaskan fenomena gelombang laut secara komprehensif. Anda akan mempelajari bagaimana gelombang terbentuk akibat angin, perbedaan antara gelombang permukaan dan gelombang dalam, serta bagaimana gelombang mempengaruhi navigasi maritim dan ekosistem pesisir.',
                video: 'https://www.youtube.com/embed/VIDEO_ID_GELOMBANG'
            },
            arus: {
                title: 'Arus Laut',
                description: 'Pelajari tentang arus laut dan peranannya dalam sistem iklim global. Video ini membahas jenis-jenis arus laut, faktor-faktor yang mempengaruhi arus, dan bagaimana arus laut mempengaruhi distribusi nutrisi, migrasi hewan laut, serta aktivitas pelayaran.',
            
            },
            cuaca: {
                title: 'Prakiraan Cuaca Maritim',
                description: 'Memahami bagaimana BMKG membuat prakiraan cuaca maritim yang akurat. Video ini menjelaskan teknologi dan metode yang digunakan meteorolog, pentingnya prakiraan cuaca untuk keselamatan pelayaran, dan cara membaca peta cuaca maritim.',
         
            },
            tsunami: {
                title: 'Mitigasi Bencana Maritim',
                description: 'Video edukatif tentang langkah-langkah mitigasi dan kesiapsiagaan menghadapi bencana maritim seperti tsunami, badai tropis, dan gelombang tinggi. Pelajari sistem peringatan dini BMKG dan tindakan yang harus dilakukan saat terjadi bencana.',
            }
        };

        function showTopic(topicKey) {
            const topic = topics[topicKey];
            openModal(topic.title, topic.description);
        }

        function showVideo(videoKey) {
            const video = videos[videoKey];
            openModal(video.title, video.description);
        }

        function openModal(title, description) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDescription').textContent = description;
            document.getElementById('modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function closeModalOnOutside(event) {
            if (event.target.id === 'modal') {
                closeModal();
            }
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.getElementById('modal').classList.contains('active')) {
                closeModal();
            }
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.video-card, .feature-card, .why-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });

        // Welcome message
        window.addEventListener('load', () => {
            setTimeout(() => {
                showNotification('🌊 Selamat datang di Maritim Cerdas! Klik Cera untuk panduan lengkap.');
            }, 1000);
        });