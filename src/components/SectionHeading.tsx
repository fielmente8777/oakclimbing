interface Props {
  title: string;
  span?: string;
  h1?: boolean;
  description?: string;
  className?: string;
}

const SectionHeading: React.FC<Props> = ({
  title,
  span,
  h1 = false,
  description,
  className = "",
}) => {
  return (
    <article className={`text-center flex flex-col gap-2 ${className}`}>
      {h1 ? (
        <h1 className="lg:text-5xl/tight playfair-display text-3xl uppercase font-bold text-primary">
          {span && <span className="font-normal text-dark">{span}</span>} {span && <br />}{" "}
          {title}
        </h1>
      ) : (
        <h2 className="lg:text-[2.5rem]/none playfair-display text-3xl capitalize font-bold text-primary">
          {span && <span className="font-normal">{span}</span>} {span && <br />}
          {title}
        </h2>
      )}
      {description && <p className="text-secondary font-semibold text-xl">{description}</p>}
    </article>
  );
};

export default SectionHeading;
