import type { Locale } from './config';

const id = {
	meta: {
		title: 'Reji Pikriyansah — Frontend-strong Fullstack Developer',
		description:
			'Portfolio Reji Pikriyansah — Frontend-strong Fullstack Developer. 4+ tahun membangun aplikasi web untuk perbankan, pemerintahan, dan enterprise. Kuat di React/Next.js, terus berkembang ke backend (Golang, ASP.NET Core), database, dan deployment dengan Docker.',
		author: 'Reji Pikriyansah',
	},
	nav: {
		experience: 'Experience',
		work: 'Work',
		skills: 'Skills',
		contact: 'Contact',
		mainNavigation: 'Navigasi utama',
		toggleMenu: 'Buka/tutup menu navigasi',
	},
	languageToggle: {
		label: 'Ganti bahasa',
	},
	hero: {
		kicker: 'Portfolio',
		nameFirst: 'Reji',
		nameLast: 'Pikriyansah',
		role: 'Frontend-strong Fullstack Developer',
		intro:
			'4+ tahun membangun aplikasi web untuk perbankan, pemerintahan, dan enterprise. Kuat di React/Next.js, terus berkembang ke backend (Golang, ASP.NET Core), database, dan deployment dengan Docker.',
		meta: 'Bandung · WFO / hybrid / WFH · Bersedia ditempatkan di luar Bandung · Notice period 1 bulan (dapat dinegosiasikan)',
		downloadCv: 'Unduh CV',
		emailCta: 'Kirim email',
	},
	stats: {
		years: {
			num: '4+',
			label: 'Tahun membangun aplikasi web',
		},
		apps: {
			num: '9',
			label: 'Aplikasi yang dikerjakan (Invoice Pro, KMS BPK, Tap-MM, SISAPRA, KPR, Konsumer, SISUKA, SIPADD, SMART)',
		},
		industries: {
			num: 'Perbankan · Pemerintahan · Enterprise',
			label: 'Pengalaman lintas industri',
		},
	},
	experience: {
		kicker: 'Pengalaman',
		title: 'Pengalaman kerja',
		employerName: 'PT Tristar Surya Gemilang',
		employerDate: 'Agu 2022 – sekarang',
		employerSub:
			'Software engineer di software house; ditempatkan di tim klien pada proyek perbankan, pemerintahan, dan enterprise.',
		entries: [
			{
				project: 'Invoice Pro',
				role: 'Fullstack Developer (maintenance)',
				date: 'Agu 2026 – sekarang',
				tags: ['React', 'Express.js', 'PostgreSQL', 'Docker'],
				lead: 'Sistem pemrosesan invoice AP untuk enterprise. Aplikasi sudah live; saya menangani perbaikan bug dari investigasi sampai rilis ke production.',
				bullets: [
					'Memelihara aplikasi yang sudah live: memperbaiki bug di production dan development (three-way matching, approval workflow, voucher, rekonsiliasi bank).',
					'Menggabungkan aksi "mark as ready" dan "generate voucher" menjadi satu klik, menghilangkan satu langkah manual dari alur kerja.',
					'Menemukan bahwa tabel client-side memotong data pada 5.000 baris sehingga sisa data tidak tampil, lalu memigrasikannya ke server-side pagination agar seluruh data dapat diakses.',
					'Mendiagnosis akar masalah pergeseran tanggal ±7 jam (zona waktu worker) pada aplikasi warisan tanpa dokumentasi, dan memperbaikinya dengan menyelaraskan ke UTC+7.',
					'Menangani Docker dan deployment; sesekali menyentuh Airflow.',
				],
			},
			{
				project: 'Bank BJBS: Aplikasi Internal',
				role: 'Frontend Developer',
				date: 'Agu 2025 – Jul 2026',
				tags: ['Laravel (Blade)', 'React', 'Next.js'],
				bullets: [
					'SISUKA (surat-menyurat): mengganti library PDF dan mengompresi hasil PDF dari ±15 MB menjadi ratusan KB.',
					'SISUKA: menyelesaikan permintaan klien berupa tanda tangan drag & drop dengan resize dan penggantian tanda tangan dengan QRIS, setelah memperbaiki bug penempatan tanda tangan.',
					'SIPADD dan SMART: mengerjakan sebagian besar frontend bersama tim.',
				],
			},
			{
				project: 'KMS BPK RI',
				role: 'Fullstack Developer',
				date: 'Jan 2025 – Feb 2026',
				tags: ['React (Vite)', 'Golang', 'SQL Server'],
				bullets: [
					'Mengerjakan sebagian besar frontend dan sebagian backend (logika bisnis, query, penyimpanan data) pada fitur knowledge management.',
					'Dikerjakan paralel dengan proyek BJBS.',
				],
			},
			{
				project: 'Tap-MM: Warehouse Management System',
				role: 'Fullstack Developer',
				date: 'Agu 2024 – Des 2024',
				tags: ['React', 'GraphQL', 'Golang', 'PostgreSQL'],
				bullets: [
					'Dipindahkan dari SISAPRA ke proyek ini karena dibutuhkan developer yang bisa frontend dan backend.',
					'Bug fixing dan membantu rekan tim lintas modul.',
				],
			},
			{
				project: 'SISAPRA: Satpol PP DKI Jakarta',
				role: 'Frontend Developer',
				date: 'Mar 2024 – Agu 2024',
				tags: ['Next.js'],
				bullets: [
					'Membangun modul absensi (frontend), mengintegrasikannya dengan backend, serta melakukan functional testing dan bug fixing.',
				],
			},
			{
				project: 'Loan Management System: Bank BJB',
				role: 'Frontend Developer',
				date: 'Agu 2022 – Feb 2024',
				tags: ['Next.js', 'React Native', 'SQL Server'],
				bullets: [
					'KPR: mengerjakan sebagian besar modul frontend, bekerja bersama tim QA dan Security agar sesuai standar keandalan dan keamanan perbankan.',
					'Konsumer: di masa awal bergabung, mengerjakan sebagian kecil frontend web dan aplikasi mobile (React Native).',
				],
			},
		],
	},
	how: {
		title: 'Cara kerja',
		items: [
			{
				title: 'Telusuri sampai akar masalah',
				body: 'Karena mengerjakan frontend dan backend, saya tidak berhenti di tampilan. Contohnya bug tanggal yang bergeser sekitar 7 jam di Invoice Pro: saya telusuri sampai penyebabnya, yaitu perubahan zona waktu worker ke UTC+7.',
			},
			{
				title: 'Diskusi dulu, baru bangun',
				body: 'Sebelum mengerjakan fitur, saya cek ke tim backend atau QA soal data yang tersedia dan kebutuhan sebenarnya, supaya tidak ada pengerjaan ulang. Di proyek KPR Bank BJB, saya bekerja bersama tim QA dan Security agar hasilnya sesuai standar keamanan bank.',
			},
			{
				title: 'Terbuka soal prioritas dan risiko',
				body: 'Saya pernah memegang dua proyek paralel (BJBS dan KMS). Kalau ada risiko jadwal, saya sampaikan lebih awal dan sebutkan apa yang bisa didahulukan.',
			},
		],
	},
	featured: {
		kicker: 'Proyek pilihan',
		title: 'Yang saya bangun untuk diri sendiri',
		lifeOs: {
			sub: 'Aplikasi manajemen keuangan pribadi · Proyek pribadi sejak 7 Sep 2026, dipakai sendiri',
			guestCta: 'Coba sebagai Guest',
			sourceCode: 'Source code',
			ariaLabel: 'Buka aplikasi Life OS',
			alt: 'Life OS personal finance dashboard showing the available spending balance card, natural-language transaction input, and account overview',
			tagline: 'AI mengusulkan, kode memutuskan.',
			body: 'Mencatat pengeluaran lewat form itu melelahkan. Di Life OS cukup ketik "jajan 18rb cash". AI (model via Groq API) hanya menafsirkan kalimat itu menjadi usulan transaksi. Backend ASP.NET Core memvalidasi, dan tidak ada yang tersimpan sebelum kamu konfirmasi. Kalau akun tidak disebut, sistem memakai akun default atau meminta kamu memilih. Pilihan bank di atas input ada untuk mempercepat, karena mengetik nama sumber dana terasa lama.',
			stack: ['React', 'TypeScript', 'ASP.NET Core', 'PostgreSQL', 'Groq API'],
			builtLabel: 'Yang saya bangun',
			builtBody: 'Merancang model domain keuangan dan alur data. Frontend dengan React dan TypeScript, backend API dengan ASP.NET Core.',
			systemLabel: 'Sistem & deployment',
			systemBody: 'Perhitungan keuangan untuk saldo tersedia/bebas. PostgreSQL di Neon, frontend di Cloudflare Pages, backend ASP.NET Core di VPS (Sumopod). Semua berjalan di domain sendiri.',
			demoFlow: ['jajan 18rb cash', 'Pengeluaran · Rp18.000 · Cash', 'Pratinjau: [ Konfirmasi ] [ Ubah ]'],
			learnedLabel: 'Yang saya pelajari',
			learnedBody: 'Requirement yang saya tulis sendiri pun ternyata kurang setelah aplikasinya dipakai nyata. Dari sini saya lebih paham kenapa kebutuhan klien sering baru jelas setelah produknya digunakan. ASP.NET Core saya pelajari sambil membangun: konsepnya sama, yang berbeda sintaks dan aturan tiap bahasa.',
			nextLabel: 'Berikutnya',
			nextBody: 'automated testing dan CI/CD.',
		},
	},
	skills: {
		kicker: 'Keahlian',
		title: 'Teknologi',
		categories: [
			{ label: 'Sehari-hari', items: 'React, Next.js, TypeScript, JavaScript, Laravel (Blade)' },
			{
				label: 'Backend & data (berkembang)',
				items: 'Golang, ASP.NET Core, Node.js/Express, GraphQL · PostgreSQL, SQL Server (query, view, materialized view)',
			},
			{ label: 'Mobile', items: 'React Native (proyek Konsumer)' },
			{ label: 'Delivery', items: 'Git (workflow tim), Docker, deployment, functional/manual testing · Airflow (sesekali)' },
			{ label: 'Pernah dipakai', items: 'CodeIgniter, MySQL, MongoDB' },
			{ label: 'Sedang dipelajari', items: 'automated testing, CI/CD, DevOps' },
		],
	},
	education: {
		kicker: 'Pendidikan',
		title: 'Latar belakang',
		university: 'Universitas Jenderal Achmad Yani Cimahi',
		eduDate: 'Agu 2017 – Feb 2022',
		degree: 'S1 Teknik Informatika · IPK 3,51',
		languages: [
			{ label: 'Bahasa Indonesia', level: 'Penutur asli' },
			{ label: 'Bahasa Inggris', level: 'Menengah' },
		],
	},
	contact: {
		heading: 'Mari membangun sesuatu yang berguna.',
		description:
			'Terbuka untuk peran Frontend atau Fullstack (FE-heavy) di software house. Prioritas Bandung; WFO, hybrid, atau WFH; bersedia ditempatkan di luar Bandung. Notice period 1 bulan, dapat dinegosiasikan.',
		emailCta: 'Kirim email',
		downloadCv: 'Unduh CV',
	},
	a11y: {
		openLifeOs: 'Buka aplikasi Life OS',
		github: 'GitHub',
		linkedin: 'LinkedIn',
	},
};

type Dictionary = typeof id;

const en: Dictionary = {
	meta: {
		title: 'Reji Pikriyansah — Frontend-strong Fullstack Developer',
		description:
			'Portfolio of Reji Pikriyansah — Frontend-strong Fullstack Developer. 4+ years building web applications for banking, government, and enterprise. Strong in React/Next.js, expanding into backend (Golang, ASP.NET Core), databases, and Docker deployment.',
		author: 'Reji Pikriyansah',
	},
	nav: {
		experience: 'Experience',
		work: 'Work',
		skills: 'Skills',
		contact: 'Contact',
		mainNavigation: 'Main navigation',
		toggleMenu: 'Toggle navigation menu',
	},
	languageToggle: {
		label: 'Switch language',
	},
	hero: {
		kicker: 'Portfolio',
		nameFirst: 'Reji',
		nameLast: 'Pikriyansah',
		role: 'Frontend-strong Fullstack Developer',
		intro:
			'4+ years building web applications for banking, government, and enterprise. Strong in React/Next.js, expanding into backend (Golang, ASP.NET Core), databases, and Docker deployment.',
		meta: 'Bandung · On-site / hybrid / remote · Available for placement outside Bandung · 1-month notice period (negotiable)',
		downloadCv: 'Download CV',
		emailCta: 'Send email',
	},
	stats: {
		years: {
			num: '4+',
			label: 'Years building web applications',
		},
		apps: {
			num: '9',
			label: 'Applications worked on (Invoice Pro, KMS BPK, Tap-MM, SISAPRA, KPR, Konsumer, SISUKA, SIPADD, SMART)',
		},
		industries: {
			num: 'Banking · Government · Enterprise',
			label: 'Cross-industry experience',
		},
	},
	experience: {
		kicker: 'Experience',
		title: 'Work experience',
		employerName: 'PT Tristar Surya Gemilang',
		employerDate: 'Aug 2022 – Present',
		employerSub:
			'Software engineer at a software house; placed on client teams for banking, government, and enterprise projects.',
		entries: [
			{
				project: 'Invoice Pro',
				role: 'Fullstack Developer (maintenance)',
				date: 'Aug 2026 – Present',
				tags: ['React', 'Express.js', 'PostgreSQL', 'Docker'],
				lead: 'AP invoice processing system for enterprise. The application is already live; I handle bug fixes from investigation through to production release.',
				bullets: [
					'Maintaining a live application: fixing bugs in production and development (three-way matching, approval workflow, voucher, bank reconciliation).',
					'Combined the "mark as ready" and "generate voucher" actions into a single click, removing one manual step from the workflow.',
					'Found that the client-side table was truncating data at 5,000 rows so the remaining data was not displayed, then migrated it to server-side pagination so all data is accessible.',
					'Diagnosed the root cause of a ±7-hour date shift (worker timezone) in an undocumented legacy application, and fixed it by aligning to UTC+7.',
					'Handled Docker and deployment; occasionally touched Airflow.',
				],
			},
			{
				// TODO: cek nama Inggris resmi untuk "Aplikasi Internal"
				project: 'Bank BJBS: Internal Applications',
				role: 'Frontend Developer',
				date: 'Aug 2025 – Jul 2026',
				tags: ['Laravel (Blade)', 'React', 'Next.js'],
				bullets: [
					'SISUKA (correspondence): replaced the PDF library and compressed the resulting PDFs from ±15 MB to a few hundred KB.',
					'SISUKA: completed a client request for drag & drop signatures with resize and signature replacement via QRIS, after fixing a signature placement bug.',
					'SIPADD and SMART: worked on most of the frontend alongside the team.',
				],
			},
			{
				// TODO: cek nama Inggris resmi untuk "BPK RI"
				project: 'KMS BPK RI',
				role: 'Fullstack Developer',
				date: 'Jan 2025 – Feb 2026',
				tags: ['React (Vite)', 'Golang', 'SQL Server'],
				bullets: [
					'Worked on most of the frontend and part of the backend (business logic, queries, data storage) for the knowledge management feature.',
					'Executed in parallel with the BJBS project.',
				],
			},
			{
				project: 'Tap-MM: Warehouse Management System',
				role: 'Fullstack Developer',
				date: 'Aug 2024 – Dec 2024',
				tags: ['React', 'GraphQL', 'Golang', 'PostgreSQL'],
				bullets: [
					'Moved from SISAPRA to this project because a developer who could handle both frontend and backend was needed.',
					'Bug fixing and assisting teammates across modules.',
				],
			},
			{
				// TODO: cek nama Inggris resmi untuk "Satpol PP"
				project: 'SISAPRA: Satpol PP DKI Jakarta',
				role: 'Frontend Developer',
				date: 'Mar 2024 – Aug 2024',
				tags: ['Next.js'],
				bullets: [
					'Built the attendance module (frontend), integrated it with the backend, and performed functional testing and bug fixing.',
				],
			},
			{
				project: 'Loan Management System: Bank BJB',
				role: 'Frontend Developer',
				date: 'Aug 2022 – Feb 2024',
				tags: ['Next.js', 'React Native', 'SQL Server'],
				bullets: [
					// TODO: cek nama Inggris resmi untuk "KPR"
					'KPR (home mortgage): worked on most of the frontend modules, collaborating with the QA and Security teams to meet banking reliability and security standards.',
					// TODO: cek nama Inggris resmi untuk "Konsumer"
					'Konsumer (consumer loans): early in joining, worked on a small portion of web frontend and the mobile app (React Native).',
				],
			},
		],
	},
	how: {
		title: 'How I work',
		items: [
			{
				title: 'Trace problems to the root cause',
				body: "Because I work on both frontend and backend, I don't stop at the UI. For example, the date bug that shifted by about 7 hours at Invoice Pro: I traced it to the cause, which was the worker timezone changing to UTC+7.",
			},
			{
				title: 'Discuss first, then build',
				body: 'Before working on a feature, I check with the backend or QA team about available data and actual requirements, to avoid rework. On the KPR Bank BJB project, I worked with the QA and Security teams to meet bank security standards.',
			},
			{
				title: 'Transparent about priorities and risks',
				body: "I have handled two parallel projects (BJBS and KMS). If there's a schedule risk, I raise it early and mention what can be prioritized.",
			},
		],
	},
	featured: {
		kicker: 'Selected work',
		title: 'What I built for myself',
		lifeOs: {
			sub: 'Personal finance management application · Personal project since 7 Sep 2026, used by myself',
			guestCta: 'Try as Guest',
			sourceCode: 'Source code',
			ariaLabel: 'Open the Life OS application',
			alt: 'Life OS personal finance dashboard showing the available spending balance card, natural-language transaction input, and account overview',
			tagline: 'AI proposes, the code decides.',
			body: 'Logging expenses through forms is tiring. In Life OS you just type "snacks 18k cash". The AI (a model via the Groq API) only interprets that sentence into a transaction proposal. The ASP.NET Core backend validates it, and nothing is saved before you confirm. If no account is mentioned, the system uses a default account or asks you to choose. The bank shortcuts above the input exist to speed things up, because typing the source of funds name feels slow.',
			stack: ['React', 'TypeScript', 'ASP.NET Core', 'PostgreSQL', 'Groq API'],
			builtLabel: 'What I built',
			builtBody: 'Designed the financial domain model and data flow. Frontend with React and TypeScript, backend API with ASP.NET Core.',
			systemLabel: 'System & deployment',
			systemBody: 'Financial calculations for available/free balance. PostgreSQL on Neon, frontend on Cloudflare Pages, ASP.NET Core backend on a VPS (Sumopod). Everything runs on its own domain.',
			demoFlow: ['snacks 18k cash', 'Expense · Rp18,000 · Cash', 'Preview: [ Confirm ] [ Edit ]'],
			learnedLabel: 'What I learned',
			learnedBody: 'Requirements I wrote myself turned out to be insufficient once the application was actually used. From this I better understand why client needs often only become clear after the product is used. I learned ASP.NET Core while building: the concepts are the same, what differs is the syntax and rules of each language.',
			nextLabel: 'Next',
			nextBody: 'automated testing and CI/CD.',
		},
	},
	skills: {
		kicker: 'Skills',
		title: 'Technology',
		categories: [
			{ label: 'Daily', items: 'React, Next.js, TypeScript, JavaScript, Laravel (Blade)' },
			{
				label: 'Backend & data (growing)',
				items: 'Golang, ASP.NET Core, Node.js/Express, GraphQL · PostgreSQL, SQL Server (query, view, materialized view)',
			},
			{ label: 'Mobile', items: 'React Native (Konsumer project)' },
			{ label: 'Delivery', items: 'Git (team workflow), Docker, deployment, functional/manual testing · Airflow (occasionally)' },
			{ label: 'Used previously', items: 'CodeIgniter, MySQL, MongoDB' },
			{ label: 'Currently learning', items: 'automated testing, CI/CD, DevOps' },
		],
	},
	education: {
		kicker: 'Education',
		title: 'Background',
		university: 'Universitas Jenderal Achmad Yani Cimahi',
		eduDate: 'Aug 2017 – Feb 2022',
		degree: "Bachelor's degree (S1) in Informatics Engineering · GPA 3.51",
		languages: [
			{ label: 'Indonesian', level: 'Native speaker' },
			{ label: 'English', level: 'Intermediate' },
		],
	},
	contact: {
		heading: "Let's build something useful.",
		description:
			'Open to Frontend or Fullstack (FE-heavy) roles at a software house. Priority in Bandung; on-site, hybrid, or remote; available for placement outside Bandung. 1-month notice period, negotiable.',
		emailCta: 'Send email',
		downloadCv: 'Download CV',
	},
	a11y: {
		openLifeOs: 'Open the Life OS application',
		github: 'GitHub',
		linkedin: 'LinkedIn',
	},
};

export const dictionaries: Record<Locale, Dictionary> = { id, en };

export function getDictionary(locale: Locale): Dictionary {
	return dictionaries[locale];
}
