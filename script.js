function toggleDetails(detailsElement) {
  const allDetails = document.querySelectorAll(".categories");

  allDetails.forEach(details => {
      if (details !== detailsElement) {
          details.open = false;
      }
  });

  if (!detailsElement.open) {
      const summaryElement = detailsElement.querySelector(".categories-title");
      if (summaryElement) {
          summaryElement.scrollIntoView({ behavior: "auto", block: "start" });
      }
  }
}

// function toggleAndScroll(summaryElement) {
//   const detailsElement = summaryElement.parentElement;
//   const allDetails = document.querySelectorAll(".categories");

//   allDetails.forEach(details => {
//       if (details !== detailsElement) {
//           details.open = true;
//       }
//   });

//   if (detailsElement.open) {
//     // Отримання координати верху елемента
//     const topCoordinate = detailsElement.getBoundingClientRect().top + window.scrollY;
//     // Прокрутка до координати елемента
//     window.scrollTo({ top: topCoordinate, behavior: "auto" });
// }
// }
