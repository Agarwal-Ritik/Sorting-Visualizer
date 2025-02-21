import './Introduction.css'
function Introduction() {
  return (
    <div className="introduction-container">
      <h2>Sorting - </h2>
      <p>
        Sorting algorithms are fundamental techniques used in computer science
        to arrange elements in a particular order, typically ascending or
        descending. These algorithms help in organizing data efficiently,
        enabling quicker searches, comparisons, and optimizations in various
        applications.
      </p>
      <h3>Types of Sorting Approaches</h3>
      <ul>
        <li>
          <strong>Comparison-Based Sorting:</strong> Algorithms like Quick Sort
          and Merge Sort use comparisons to determine order.
        </li>
        <li>
          <strong>Non-Comparison Sorting:</strong> Techniques like Counting Sort
          and Radix Sort leverage alternative methods such as counting or digit
          extraction.
        </li>
      </ul>
    </div>
  );
}

export default Introduction;
