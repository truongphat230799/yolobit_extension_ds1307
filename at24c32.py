import time

class AT24C32N(object):
    """Driver for the AT24C32N 32K EEPROM."""

    def __init__(self, i2c, i2c_addr=0x50, pages=128, bpp=32):
        self.i2c = i2c
        self.i2c_addr = i2c_addr
        self.pages = pages
        self.bpp = bpp # bytes per page

    def capacity(self):
        """Storage capacity in bytes"""
        return self.pages * self.bpp

    def read(self, addr, nbytes):
        """Read one or more bytes from the EEPROM starting from a specific address"""
        return self.i2c.readfrom_mem(self.i2c_addr, addr, nbytes, addrsize=16)

    def write(self, addr, buf):
        """Write one or more bytes to the EEPROM starting from a specific address"""
        offset = addr % self.bpp
        partial = 0
        # partial page write
        if offset > 0:
            partial = self.bpp - offset
            self.i2c.writeto_mem(self.i2c_addr, addr, buf[0:partial], addrsize=16)
            time.sleep_ms(5)
            addr += partial
        # full page write
        for i in range(partial, len(buf), self.bpp):
            self.i2c.writeto_mem(self.i2c_addr, addr+i-partial, buf[i:i+self.bpp], addrsize=16)
            time.sleep_ms(5)