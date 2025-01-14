import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import FormComponent from './FormComponent';
import useSquare from './useSquare';
describe('Form Component',() =>{
    const user = userEvent.setup()
    beforeEach(() => {
      // render(<FormComponent/>);
    });
    it('render typed value',async () =>{
        const inputEle = screen.getByRole('textbox',{name: 'Product Name'});
        await user.type(inputEle,'12');
        expect(screen.getByText('123')).toBeInTheDocument();
    })
    it('render typed value',async () =>{
        const inputEle = screen.getByRole('textbox',{name: 'Product Name'});
        await user.type(inputEle,'12');
        await waitFor(() => expect(screen.getByText('12')).toBeInTheDocument());
        // expect(screen.findByText('12')).toBeInTheDocument();
    })
    it('Testing Custom Hooks',() => {
      const {result,props} = renderHook(()=> useSquare(50));
      expect(result.current).toBe(2500);
    });
    fit('Testing Async Functions',async() => {
        const mockResponse = {
          "products": [
              {
                  "id": 1,
                  "title": "Essence Mascara Lash Princess",
                  "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
                  "category": "beauty",
                  "price": 9.99,
                  "discountPercentage": 7.17,
                  "rating": 4.94,
                  "stock": 5,
                  "tags": [
                      "beauty",
                      "mascara"
                  ],
                  "brand": "Essence",
              },
              {
                  "id": 2,
                  "title": "Eyeshadow Palette with Mirror",
                  "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
                  "category": "beauty",
                  "price": 19.99,
                  "discountPercentage": 5.5,
                  "rating": 3.28,
                  "stock": 44,
                  "tags": [
                      "beauty",
                      "eyeshadow"
                  ],
                  "brand": "Glamour Beauty",
              }
          ],
          "total": 194,
          "skip": 0,
          "limit": 30
      }
     
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse)
      }
      )
      render(<FormComponent/>);
      await user.click(screen.getByRole('button',{
        name: 'Get Products'
      }))
      await waitFor(() => {
        expect(screen.getByText('Essence')).toBeInTheDocument();
      })
    });
})