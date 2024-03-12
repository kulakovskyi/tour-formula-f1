"use strict";
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var currentIndex = 1;
  var startX = 0;
  var isDragging = false;
  var slider = document.querySelector('.formula__slider');
  var items = document.querySelectorAll('.formula__item');
  var totalItems = items.length;
  function updateSlider() {
    items.forEach(function (item, index) {
      var distance = index - currentIndex;
      var newPosition = distance * 50;
      if (distance > totalItems / 2) {
        newPosition -= totalItems * 50;
      } else if (distance < -totalItems / 2) {
        newPosition += totalItems * 50;
      }
      var scale = index === currentIndex ? 1 : 0.8;
      item.style.transform = "translateX(".concat(newPosition, "%) scale(").concat(scale, ")");
      item.style.zIndex = index === currentIndex ? 2 : 1;
      var isVisible = Math.abs(distance) <= 1 || index === 0 && currentIndex === totalItems - 1 || index === totalItems - 1 && currentIndex === 0;
      item.classList.toggle('hidden', !isVisible);
      item.classList.toggle('active', index === currentIndex);
      item.classList.remove('left-slide', 'right-slide');
      if (distance === 1 || currentIndex === totalItems - 1 && index === 0) {
        item.classList.add('right-slide');
      } else if (distance === -1 || currentIndex === 0 && index === totalItems - 1) {
        item.classList.add('left-slide');
      }
    });
  }
  function moveSlider(offset) {
    currentIndex = (currentIndex + offset + totalItems) % totalItems;
    updateSlider();
  }
  function handleStart(event) {
    isDragging = true;
    startX = event.clientX || event.touches[0].clientX;
  }
  function handleMove(event) {
    if (!isDragging) return;
    var currentX = event.clientX || event.touches[0].clientX;
    var diffX = currentX - startX;
    if (Math.abs(diffX) > 50) {
      moveSlider(diffX > 0 ? -1 : 1);
      isDragging = false;
    }
  }
  function handleEnd() {
    isDragging = false;
  }
  var buttonsLeft = document.querySelectorAll('.formula__control-left');
  var buttonsRight = document.querySelectorAll('.formula__control-right');
  buttonsLeft.forEach(function (btn) {
    btn.addEventListener('click', function () {
      moveSlider(-1);
    });
  });
  buttonsRight.forEach(function (btn) {
    btn.addEventListener('click', function () {
      moveSlider(1);
    });
  });
  slider.addEventListener('mousedown', handleStart);
  slider.addEventListener('touchstart', handleStart);
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('touchmove', handleMove);
  document.addEventListener('mouseup', handleEnd);
  document.addEventListener('touchend', handleEnd);
  updateSlider();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudEluZGV4Iiwic3RhcnRYIiwiaXNEcmFnZ2luZyIsInNsaWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b3RhbEl0ZW1zIiwibGVuZ3RoIiwidXBkYXRlU2xpZGVyIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImRpc3RhbmNlIiwibmV3UG9zaXRpb24iLCJzY2FsZSIsInN0eWxlIiwidHJhbnNmb3JtIiwiY29uY2F0IiwiekluZGV4IiwiaXNWaXNpYmxlIiwiTWF0aCIsImFicyIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsImFkZCIsIm1vdmVTbGlkZXIiLCJvZmZzZXQiLCJoYW5kbGVTdGFydCIsImV2ZW50IiwiY2xpZW50WCIsInRvdWNoZXMiLCJoYW5kbGVNb3ZlIiwiY3VycmVudFgiLCJkaWZmWCIsImhhbmRsZUVuZCIsImJ1dHRvbnNMZWZ0IiwiYnV0dG9uc1JpZ2h0IiwiYnRuIl0sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0RCxJQUFJQyxZQUFZLEdBQUcsQ0FBQztFQUNwQixJQUFJQyxNQUFNLEdBQUcsQ0FBQztFQUNkLElBQUlDLFVBQVUsR0FBRyxLQUFLO0VBRXRCLElBQU1DLE1BQU0sR0FBR0wsUUFBUSxDQUFDTSxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFDekQsSUFBTUMsS0FBSyxHQUFHUCxRQUFRLENBQUNRLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0VBQ3pELElBQU1DLFVBQVUsR0FBR0YsS0FBSyxDQUFDRyxNQUFNO0VBRS9CLFNBQVNDLFlBQVlBLENBQUEsRUFBRztJQUNwQkosS0FBSyxDQUFDSyxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUs7TUFDM0Is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RyxLQUFLO0VBQ3RCO0VBRUEsSUFBTW1DLFdBQVcsR0FBR3ZDLFFBQVEsQ0FBQ1EsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUM7RUFDdkUsSUFBTWdDLFlBQVksR0FBR3hDLFFBQVEsQ0FBQ1EsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7RUFDekUrQixXQUFXLENBQUMzQixPQUFPLENBQUMsVUFBQTZCLEdBQUcsRUFBSztJQUN4QkEsR0FBRyxDQUFDeEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDaEM0QixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBQ0ZXLFlBQVksQ0FBQzVCLE9BQU8sQ0FBQyxVQUFBNkIsR0FBRyxFQUFLO0lBQ3pCQSxHQUFHLENBQUN4QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUNoQzRCLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBRUZ4QixNQUFNLENBQUNKLGdCQUFnQixDQUFDLFdBQVcsRUFBRThCLFdBQVcsQ0FBQztFQUNqRDFCLE1BQU0sQ0FBQ0osZ0JBQWdCLENBQUMsWUFBWSxFQUFFOEIsV0FBVyxDQUFDO0VBRWxEL0IsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVrQyxVQUFVLENBQUM7RUFDbERuQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsRUFBRWtDLFVBQVUsQ0FBQztFQUVsRG5DLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFcUMsU0FBUyxDQUFDO0VBQy9DdEMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUVxQyxTQUFTLENBQUM7RUFFaEQzQixZQUFZLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDE7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtdWxhX19zbGlkZXInKTtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtdWxhX19pdGVtJyk7XG4gICAgY29uc3QgdG90YWxJdGVtcyA9IGl0ZW1zLmxlbmd0aDtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcigpIHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gaW5kZXggLSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBkaXN0YW5jZSAqIDUwO1xuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiB0b3RhbEl0ZW1zIC8gMikge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uIC09IHRvdGFsSXRlbXMgKiA1MDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPCAtdG90YWxJdGVtcyAvIDIpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiArPSB0b3RhbEl0ZW1zICogNTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gaW5kZXggPT09IGN1cnJlbnRJbmRleCA/IDEgOiAwLjg7XG5cbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtuZXdQb3NpdGlvbn0lKSBzY2FsZSgke3NjYWxlfSlgO1xuICAgICAgICAgICAgaXRlbS5zdHlsZS56SW5kZXggPSBpbmRleCA9PT0gY3VycmVudEluZGV4ID8gMiA6IDE7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IE1hdGguYWJzKGRpc3RhbmNlKSA8PSAxIHx8IChpbmRleCA9PT0gMCAmJiBjdXJyZW50SW5kZXggPT09IHRvdGFsSXRlbXMgLSAxKSB8fCAoaW5kZXggPT09IHRvdGFsSXRlbXMgLSAxICYmIGN1cnJlbnRJbmRleCA9PT0gMCk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsICFpc1Zpc2libGUpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBpbmRleCA9PT0gY3VycmVudEluZGV4KTtcblxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdsZWZ0LXNsaWRlJywgJ3JpZ2h0LXNsaWRlJyk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDEgfHwgKGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgaW5kZXggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdyaWdodC1zbGlkZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gLTEgfHwgKGN1cnJlbnRJbmRleCA9PT0gMCAmJiBpbmRleCA9PT0gdG90YWxJdGVtcyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNsaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZXIob2Zmc2V0KSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyBvZmZzZXQgKyB0b3RhbEl0ZW1zKSAlIHRvdGFsSXRlbXM7XG4gICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICBzdGFydFggPSBldmVudC5jbGllbnRYIHx8IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRYID0gZXZlbnQuY2xpZW50WCB8fCBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gY3VycmVudFggLSBzdGFydFg7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IDUwKSB7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyKGRpZmZYID4gMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFbmQoKSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25zTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtdWxhX19jb250cm9sLWxlZnQnKVxuICAgIGNvbnN0IGJ1dHRvbnNSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtdWxhX19jb250cm9sLXJpZ2h0JylcbiAgICBidXR0b25zTGVmdC5mb3JFYWNoKGJ0biAgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyKC0xKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGJ1dHRvbnNSaWdodC5mb3JFYWNoKGJ0biAgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb3ZlU2xpZGVyKDEpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlU3RhcnQpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlU3RhcnQpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlTW92ZSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlRW5kKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZUVuZCk7XG5cbiAgICB1cGRhdGVTbGlkZXIoKTtcbn0pO1xuXG5cbiJdfQ==
