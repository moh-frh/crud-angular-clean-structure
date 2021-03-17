import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

describe('testt', async() => {

    let httpMock: HttpTestingController;

    beforeEach(async() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
        })
        .compileComponents();
      });

    beforeEach(() => {
        httpMock = TestBed.inject(HttpTestingController)
      })

    const rootUrl = 'http://localhost:3000/';

    test('test Users-service', () => {
        let httpMock: HttpTestingController = TestBed.inject(HttpTestingController);

        httpMock = TestBed.inject(HttpTestingController)

        const req = httpMock.expectOne(rootUrl+'users')
        // expect(req.request.method).toBe('GET')
        expect(3).toBe(3)
    })


})