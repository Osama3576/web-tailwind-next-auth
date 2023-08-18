'use client';
function Menue({ items }) {
  return (
    <>
      {items.map(cv => {
        return (
          <div key={cv.heading}>
            <p key={cv.heading} className="mb-4">
              {cv.heading}
            </p>
            {cv.names.map(nam => (
              <p
                key={nam}
                className="text-[#b8bad0] hover:cursor-pointer hover:text-slate-100 mb-3"
              >
                {nam}
              </p>
            ))}
          </div>
        );
      })}
    </>
  );
}

export default Menue;
