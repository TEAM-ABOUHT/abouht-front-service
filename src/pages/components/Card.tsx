export type CardProps = {
  img: string;
  title: string;
  badge?: string | null;
  tags?: string[] | null;
};

const Card = ({ img, title, badge, tags }: CardProps) => (
  <div className="grid grid-cols-1 m-5 place-items-center">
    <div className=" shadow-xl w-[199px] h-[281px] sm:w-[199px] sm:h-[281px] md:w-[397px] md:h-[561px] card bg-base-100 ">
      <figure>
        <img className="object-cover h-fit" src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {badge && <div className="badge badge-secondary">{badge}</div>}
        </h2>
        <div className="justify-end card-actions">
          {tags &&
            tags.map((tag) => <div className="badge badge-outline">{tag}</div>)}
        </div>
      </div>
    </div>
  </div>
);

export default Card;
