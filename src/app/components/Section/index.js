export default function Section({children}){
    return (
        <section>
            <div className="container mx-auto mb-[80px]">
                {children}
            </div>
        </section>
    );
}