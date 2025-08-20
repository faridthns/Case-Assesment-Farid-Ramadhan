import React from "react";


export default function Feedback() {
    const testimonials = [
        {
            name: "Rani",
            role: "Fresh Graduate",
            feedback:
            "Sebelum ikut kelas ini, saya bingung bikin profil LinkedIn yang menarik HR. Setelah ikut, dalam 2 minggu saya dapat panggilan interview dari 3 perusahaan! Materinya jelas, step by step, dan gampang dipraktikkan.",
        },
        {
            name: "Bima",
            role: "Software Engineer",
            feedback:
            "Dulu saya pikir LinkedIn cuma tempat upload CV. Ternyata banyak strategi networking yang bisa dipakai. Setelah optimasi profil, saya berhasil dapat tawaran kerja remote pertama saya!",
        },
        {
            name: "Dewi",
            role: "Marketing Specialist",
            feedback:
            "Kelasnya enak banget, nggak terlalu formal, tapi ilmunya daging semua. Mentor juga kasih banyak tips praktis. Sekarang saya lebih percaya diri bangun personal branding di LinkedIn.",
        },
    ];
    
    return (
        <section className="feedback-section" id="feedback">
            <div className="feedback">
                <h2 className="section-title">Apa Kata Alumni?</h2>
                <div className="feedback-grid">
                {testimonials.map((item, index) => (
                    <div key={index} className="card" data-aos="fade-up">
                        <div className="feedback-header">
                            <h3 className="feedback-name">{item.name}</h3>
                            <p className="feedback-role">{item.role}</p>
                        </div>
                        <p className="feedback-text">“{item.feedback}”</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
