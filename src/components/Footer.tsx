import ContactItem from "./ContactItem";

const Footer = ({
  contact,
  name,
}: {
  contact: { id: number; name: string; href: string; isEmail?: boolean }[];
  name: string;
}) => {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center bg-GRAY h-28 text-xs text-white dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_HEAVY">
      <div className="flex gap-1">
        {contact.map((contact) => (
          <ContactItem key={contact.id} {...contact}>
            {contact.name}
          </ContactItem>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <span className="whitespace-pre-wrap text-center">{`Copyright 2024. ${name} All rights reserved.`}</span>
        <a target="_blank" rel="noreferrer" href="https://github.com/dhalsdl12/mini-portfolio">
          Powered by minji-portfolio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
