import React from "react";

export default function Footer({
  contactLink,
}: {
  contactLink: string;
}): JSX.Element {
  return (
    <footer className="py-12 px-8 bg-black text-white">
      <div className="container">
        <div className="grid">
          <div className="row-span-3">
            <h3>
              <strong>Contact</strong>
            </h3>
            <ul className="list-none">
              <li>
                <a href={contactLink}>Email us at Panko</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
