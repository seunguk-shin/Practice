import React from 'react'
import './Template.css'

const Template = ({left, right}) => {
  return (
    <main className="user-management-template">
      <section className="input">
        {left}
      </section>
      <section className="user-list">
        {right}
      </section>
    </main>
  );
};

export default Template;
