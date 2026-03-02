import { useEffect, useState } from "react";

const Particles = () => {
    const [particles, setParticles] = useState<{ id: number; left: string; delay: string; duration: string; size: string }[]>([]);

    useEffect(() => {
        const p = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${6 + Math.random() * 4}s`,
            size: `${2 + Math.random() * 4}px`,
        }));
        setParticles(p);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        animation: `particle-rise ${p.duration} linear ${p.delay} infinite`,
                    }}
                />
            ))}
        </div>
    );
};

export default Particles;
