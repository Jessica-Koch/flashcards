import './Triangles.scss';

type TrianglesProps = {
  className?: string;
};

export const Triangles = ({ className }: TrianglesProps) => {
  return (
    <div className={`triangles ${className}`}>
      <div className='triangle redTriangle' />
      <div className=' triangleHollow orangeTriangle' />
      <div className='triangle yellowTriangle' />
      <div className=' triangleHollow greenTriangle' />
      <div className='triangle blueTriangle' />
      <div className=' triangleHollow purpleTriangle' />
    </div>
  );
};
