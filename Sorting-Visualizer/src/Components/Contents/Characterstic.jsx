import './Characterstics.css'

function Charactersitics(){
  return (
    <div className="characterstic-container">
      <h2>Characteristics of Sorting Algorithms</h2>
      <h3>1. Time Complexity</h3>
      <p>
        The time complexity of a sorting algorithm determines how the running
        time increases as the input size grows. It is commonly expressed using
        Big-O notation. Some common complexities include:
      </p>
      <h3>2. Space Complexity</h3>
      <p>
        Some sorting algorithms require additional memory, while others sort the
        data in place. Space complexity is an important factor when working with
        large datasets.
      </p>
      <h3>3. Stability</h3>
      <p>
        A sorting algorithm is stable if it preserves the relative order of
        equal elements. Stability is crucial in applications where maintaining
        initial order is important.
      </p>
      <h3>4.In-Place</h3>
      <p>
        Adaptive algorithms take advantage of partially sorted data and perform
        better than their worst-case complexity.
      </p>
    </div>
  );
}
export default Charactersitics;
