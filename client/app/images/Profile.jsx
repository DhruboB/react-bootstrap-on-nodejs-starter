import React, { Component } from "react";
import { Image } from "react-bootstrap";

class Profile extends Component {
  render() {
    return (
      <div>
        <Image
          className="m-2"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAEJklEQVRIibXWb2gbdRgH8O9desmlvaR3+dc0/ZOk7aJtV+lanVsRYczOMgWH0CmuOOlgqIiwvdnmFKq+2ARxglpwoKvCEFcYvpibrejqFCs6145t7QZZW9umaZM0TXv5c5fk7nzRVRY0lzTU59Udvy/P57h77ndHYJ316cFWSl9krzMwekdsOeb3lj96u6enR15vHyLf4IU3nttsMpnfYjnjFrOJc+ppnVYUUyn/QuB2MBg6vfPNMx9vOPzjiQPd7uqqd13OSsd/ra/wUeHqtRs9O49/9t6GwQNvd7Vvrn/wrMNht6rlAoFQJBAK3/XPzf8UuZU4tre/P6mWL8oFW0yW47lQALDZLKzNZml9YJO7ZZgesaMf+9TypNriuSOdTZWV9kdyofcXRVGEp8719LkjnU0FwyxTssdqMRfnwqb8PtyZmYIsrQ53WZnNyBaXdBYMazUUSxDZx0AQRNyZnkRpgwm1O2ow7puAogAEAWgpqkStt+ozlhRpZe04mUzBHwogrciABlBIQMtp4dnlAUGuXn/tY7XwXplIbXK6qWQ6tVgwLIjChCCKCIbDksQRmsrHq1CkpbLmaYZGVI6KK9E4mYiL19R6q97q2Xn+kn8+yAfjAdnV4lRF10ohZGou4I+Eaf9QwfBD7fpuPh1hCAq5xXtFaAhdkoyb6httrxUMK4pCE4yc97b6T1MGRFqGvmBYTAd7leLEFM1p80ZpTgtZH5sUhMXeguEdLwyFYnzkFZotiuUNl1LRRCT68hP7f1CdalUYANr29n+XFtPD+cLpVHJ42/NfD+bK5YQBYHk58H0iHpNy5RKxqBQJLw7k0zMv+NuR2vfv3hy5IknZbUmS4B2/PnTxuvtUPj3zntjLZ/aw5nKbt7ah2VzMGDLW4jwP7/jooi8Uq9nddXYlS4vCYAAYvfjSgJFldykyCdbqAKAgEvQDGgX80tJg8+6+J/PtlRM+2vszx1mN+0uYkpZmfN5RV0VYAUAUkgAU6GgdAMA7owRHiO5LcT424p8N9314aEekIPjQB7/qK2u4kzY794yjwuKkKA2Kps+jQvMHdDpNRlYQ0piTtyJd/SxSKQm+meBfgYWlb3yTkWOnDrcl8oZPfnm1mrFxXzU2udo0msz5I30XYIj+BoMuDgDgxWLwzHbIFU9l5CRJxtiNqV/4wNK+oy8+PJ0TfvWTy0yTxznY2OTenu1uQE5BWZlcbWB0A2T2rfzWzanfx8YW2j96fVvG0P3rs+ipcpyub3RlRwGApECwHtXIWtU3OLcKCbEXQFdGi/tPTvT92VrlKusgyXV/F7JfI0mg2lnW8c4Xo1uywjqOOWi1lXIbpt4rq401G0z6A1lhYyndsNHoWhkMdMZfZ8YzlmXYYzHhf4GlNMqzwrOzC4cXfMHMl3SDKqXIGRv939arhOlXzUFdAAAAAElFTkSuQmCC"
          roundedCircle
          responsive
        />
      </div>
    );
  }
}

export default Profile;
